'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the filtering failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FilteringFailedEventArguments extends EventArguments
{
	/**
	 * Stores the filtering error message.
	 * @type {String}
	 */
	#_errorMessage;

	/**
	 * Constructor method.
	 * @param {String} errorMessage The filtering error message.
	 */
	constructor( errorMessage )
	{
		super();

		this.#_errorMessage = errorMessage;
	}

	/**
	 * Gets the filtering error message.
	 * @returns {String} The filtering error message.
	 */
	get errorMessage()
	{
		return this.#_errorMessage;
	}
}
