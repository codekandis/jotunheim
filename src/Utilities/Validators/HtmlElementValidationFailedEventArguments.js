'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the HTML element validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationFailedEventArguments extends EventArguments
{
	/**
	 * Stores the validated HTML element.
	 * @type {HTMLElement}
	 */
	#_htmlElement;

	/**
	 * Stores the validation error message.
	 * @type {String}
	 */
	#_errorMessage;

	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The validated HTML element.
	 * @param {String} errorMessage The validation error message.
	 */
	constructor( htmlElement, errorMessage )
	{
		super();

		this.#_htmlElement  = htmlElement;
		this.#_errorMessage = errorMessage;
	}

	/**
	 * Gets the validated HTML element.
	 * @returns {HTMLElement} The validated HTML element.
	 */
	get htmlElement()
	{
		return this.#_htmlElement;
	}

	/**
	 * Gets the validation error message.
	 * @returns {String} The validation error message.
	 */
	get errorMessage()
	{
		return this.#_errorMessage;
	}
}
