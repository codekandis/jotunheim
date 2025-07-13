'use strict';

import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the HTML element validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the validated HTML elements.
	 * @type {Collection<HTMLElement>}
	 */
	#_htmlElements;

	/**
	 * Constructor method.
	 * @param {Collection<HTMLElement>} htmlElements The validated HTML elements.
	 */
	constructor( htmlElements )
	{
		super();

		this.#_htmlElements = htmlElements;
	}

	/**
	 * Gets the validated HTML elements.
	 * @returns {Collection<HTMLElement>} The validated HTML elements.
	 */
	get htmlElements()
	{
		return this.#_htmlElements;
	}
}
