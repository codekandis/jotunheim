'use strict';

import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationFailedEventArguments extends EventArguments
{
	/**
	 * Stores the validation error message.
	 */
	#_errorMessage: string;

	/**
	 * Constructor method.
	 * @param errorMessage The validation error message.
	 */
	constructor( errorMessage: string )
	{
		super();

		this.#_errorMessage = errorMessage;
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
