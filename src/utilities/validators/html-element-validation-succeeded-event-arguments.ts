'use strict';

import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the HTML element validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the validated HTML element.
	 */
	#_htmlElement: HTMLElement;

	/**
	 * Constructor method.
	 * @param htmlElement The validated HTML element.
	 */
	constructor( htmlElement: HTMLElement )
	{
		super();

		this.#_htmlElement = htmlElement;
	}

	/**
	 * Gets the validated HTML element.
	 * @returns The validated HTML element.
	 */
	get htmlElement(): HTMLElement
	{
		return this.#_htmlElement;
	}
}
