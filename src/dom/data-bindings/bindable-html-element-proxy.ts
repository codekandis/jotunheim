'use strict';

import type { BindableProxy_InstantiationCallack } from '../../types/data-bindings/bindable-proxy.js';
import { BindableProxy } from '../../types/data-bindings/bindable-proxy.js';
import { DomHelper } from '../dom-helper.js';
import { BindableHtmlElementProxyEvents } from './bindable-html-element-proxy-events.js';

/**
 * Represents a bindable HTML element proxy.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BindableHtmlElementProxy extends BindableProxy
{
	/**
	 * Constructor method.
	 * @param formField The HTML element to proxy.
	 * @param bindableEvents The events to bind to the HTML element.
	 */
	constructor( formField: HTMLElement, bindableEvents: number = BindableHtmlElementProxyEvents.INPUT )
	{
		super( formField, BindableHtmlElementProxy.#getInitializingCallback( bindableEvents ) );
	}

	/**
	 * Static constructor method.
	 * @param selector The CSS selector specifying the HTML element to proxy.
	 * @param bindableEvents The events to bind to the HTML element.
	 * @returns The bindable HTML element proxy.
	 */
	static with_selector( selector: string, bindableEvents: number = BindableHtmlElementProxyEvents.INPUT ): BindableHtmlElementProxy
	{
		return new this(
			DomHelper.querySelector( selector ),
			bindableEvents
		);
	}

	/**
	 * Gets the initializing callback.
	 * @param bindableEvents The events to bind to the HTML element.
	 * @returns The initializing callback.
	 */
	static #getInitializingCallback( bindableEvents: number ): BindableProxy_InstantiationCallack
	{
		/**
		 * Will be invoked after the instantiation of the bindable proxy.
		 * @param bindableProxy The instantiated bindable proxy.
		 */
		const initializer = ( bindableProxy: BindableProxy ): void =>
		{
			const eventHandler = (): void =>
			{
				let propertyName = 'value';

				switch ( bindableProxy.delegatedObject.type )
				{
					case 'checkbox':
					{
						propertyName = 'checked';

						break;
					}
					case 'datetime-local':
					case 'date':
					case 'time':
					{
						propertyName = 'valueAsDate';

						break;
					}
				}

				bindableProxy._dispatchPropertyChangedEvent( propertyName, bindableProxy.proxy );
			};

			if ( 0 !== ( bindableEvents & BindableHtmlElementProxyEvents.INPUT ) )
			{
				bindableProxy.delegatedObject.inputEvent.add( eventHandler );
			}
			if ( 0 !== ( bindableEvents & BindableHtmlElementProxyEvents.CHANGE ) )
			{
				bindableProxy.delegatedObject.changeEvent.add( eventHandler );
			}
		};

		return initializer;
	}
}
