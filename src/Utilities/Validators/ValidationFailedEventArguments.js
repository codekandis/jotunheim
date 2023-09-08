'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationFailedEventArguments extends EventArguments
{
	/**
	 * Stores the validation error message.
	 * @type {String}
	 */
	#_errorMessage;

	/**
	 * Constructor method.
	 * @param {String} errorMessage The validation error message.
	 */
	constructor( errorMessage )
	{
		super();

		this.#_errorMessage = errorMessage;
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
