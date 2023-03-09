'use strict';

import { DomHelper } from '../../Dom/DomHelper.js';
import { BindableProxy } from './BindableProxy.js';

/**
 * Represents a bindable HTML element proxy.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BindableHtmlElementProxy extends BindableProxy
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} formField The HTML element to proxy.
	 */
	constructor( formField )
	{
		super( formField, BindableHtmlElementProxy.#bindEventHandlersToBindableProxy );
	}

	/**
	 * Static constructor method.
	 * @param {String} selector The CSS selector specifying the HTML element to proxy.
	 * @returns {BindableHtmlElementProxy}
	 * @constructor
	 */
	static with_selector( selector )
	{
		return new this(
			DomHelper.querySelector( selector )
		);
	}

	/**
	 * Will be invoked after the instantiation of the bindable proxy.
	 * @param bindableProxy The instantiated bindable proxy.
	 */
	static #bindEventHandlersToBindableProxy( bindableProxy )
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

		bindableProxy.delegatedObject.inputEvent( eventHandler );
		bindableProxy.delegatedObject.changeEvent( eventHandler );
	}
}
