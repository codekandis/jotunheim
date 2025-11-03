'use strict';

import { EventArguments } from '../../types/event-arguments.js';

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
	 * @type {string}
	 */
	#_errorMessage;

	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The validated HTML element.
	 * @param {string} errorMessage The validation error message.
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
	 * @returns {string} The validation error message.
	 */
	get errorMessage()
	{
		return this.#_errorMessage;
	}
}
