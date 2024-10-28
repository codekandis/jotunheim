'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the HTML element validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the validated HTML element.
	 * @type {HTMLElement}
	 */
	#_htmlElement;

	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The validated HTML element.
	 */
	constructor( htmlElement )
	{
		super();

		this.#_htmlElement = htmlElement;
	}

	/**
	 * Gets the validated HTML element.
	 * @returns {HTMLElement} The validated HTML element.
	 */
	get htmlElement()
	{
		return this.#_htmlElement;
	}
}
