'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the filterings failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FilteringsFailedEventArguments extends EventArguments
{
	/**
	 * Stores the filtering error messages.
	 * @type {Collection<String>}
	 */
	#_errorMessages;

	/**
	 * Constructor method.
	 * @param {Collection<String>} errorMessages The filtering error messages.
	 */
	constructor( errorMessages )
	{
		super();

		this.#_errorMessages = errorMessages;
	}

	/**
	 * Gets the filtering error messages.
	 * @returns {Collection<String>} The filtering error messages.
	 */
	get errorMessages()
	{
		return this.#_errorMessages;
	}
}
