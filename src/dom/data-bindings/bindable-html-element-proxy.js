'use strict';

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
	 * @param {HTMLElement} formField The HTML element to proxy.
	 * @param {Number} bindableEvents The CSS selector specifying the HTML element to proxy.
	 */
	constructor( formField, bindableEvents = BindableHtmlElementProxyEvents.INPUT )
	{
		super( formField, BindableHtmlElementProxy.#getInitializingCallback( bindableEvents ) );
	}

	/**
	 * Static constructor method.
	 * @param {String} selector The CSS selector specifying the HTML element to proxy.
	 * @param {Number} bindableEvents The CSS selector specifying the HTML element to proxy.
	 * @returns {BindableHtmlElementProxy}
	 * @constructor
	 */
	static with_selector( selector, bindableEvents = BindableHtmlElementProxyEvents.INPUT )
	{
		return new this(
			DomHelper.querySelector( selector ),
			bindableEvents
		);
	}

	/**
	 * Gets the initializing callback.
	 * @param {Number} bindableEvents The CSS selector specifying the HTML element to proxy.
	 * @return {Function} The initializing callback.
	 */
	static #getInitializingCallback( bindableEvents )
	{
		/**
		 * Will be invoked after the instantiation of the bindable proxy.
		 * @param bindableProxy The instantiated bindable proxy.
		 */
		const initializer = ( bindableProxy ) =>
		{
			const eventHandler = ( event ) =>
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
				bindableProxy.delegatedObject.inputEvent( eventHandler );
			}
			if ( 0 !== ( bindableEvents & BindableHtmlElementProxyEvents.CHANGE ) )
			{
				bindableProxy.delegatedObject.changeEvent( eventHandler );
			}
		};

		return initializer;
	}
}
