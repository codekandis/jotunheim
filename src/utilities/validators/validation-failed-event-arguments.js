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
	 * @type {string}
	 */
	#_errorMessage;

	/**
	 * Constructor method.
	 * @param {string} errorMessage The validation error message.
	 */
	constructor( errorMessage )
	{
		super();

		this.#_errorMessage = errorMessage;
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
