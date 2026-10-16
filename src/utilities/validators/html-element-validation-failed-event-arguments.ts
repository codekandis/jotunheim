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
	 */
	#_htmlElement: HTMLElement;

	/**
	 * Stores the validation error message.
	 */
	#_errorMessage: string;

	/**
	 * Constructor method.
	 * @param htmlElement The validated HTML element.
	 * @param errorMessage The validation error message.
	 */
	constructor( htmlElement: HTMLElement, errorMessage: string )
	{
		super();

		this.#_htmlElement  = htmlElement;
		this.#_errorMessage = errorMessage;
	}

	/**
	 * Gets the validated HTML element.
	 * @returns The validated HTML element.
	 */
	get htmlElement(): HTMLElement
	{
		return this.#_htmlElement;
	}

	/**
	 * Gets the validation error message.
	 * @returns The validation error message.
	 */
	get errorMessage(): string
	{
		return this.#_errorMessage;
	}
}
