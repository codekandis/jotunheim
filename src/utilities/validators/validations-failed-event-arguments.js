'use strict';

import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationsFailedEventArguments extends EventArguments
{
	/**
	 * Stores the validation error messages.
	 * @type {Collection<string>}
	 */
	#_errorMessages;

	/**
	 * Constructor method.
	 * @param {Collection<string>} errorMessages The validation error messages.
	 */
	constructor( errorMessages )
	{
		super();

		this.#_errorMessages = errorMessages;
	}

	/**
	 * Gets the validation error messages.
	 * @returns {Collection<string>} The validation error messages.
	 */
	get errorMessages()
	{
		return this.#_errorMessages;
	}
}
