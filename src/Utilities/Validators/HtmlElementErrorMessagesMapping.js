'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents a mapping of a validated HTML element and its validation error messages.
 */
export class HtmlElementErrorMessagesMapping extends Abstract
{
	/**
	 * Stores the validated HTML element.
	 * @type {HTMLElement}
	 */
	#_htmlElement;

	/**
	 * Stores the validation error messages.
	 * @type {Collection<String>}
	 */
	#_errorMessages;

	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The validated HTML element.
	 * @param {Collection<String>} errorMessages The validation error messages.
	 */
	constructor( htmlElement, errorMessages )
	{
		super();

		this.#_htmlElement   = htmlElement;
		this.#_errorMessages = errorMessages;
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
	 * Gets the validation error messages.
	 * @returns {Collection<String>} The validation error messages.
	 */
	get errorMessages()
	{
		return this.#_errorMessages;
	}
}
