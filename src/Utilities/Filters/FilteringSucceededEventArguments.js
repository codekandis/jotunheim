'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the filtering succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FilteringSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the filtered value.
	 * @type {*}
	 */
	#_filteredValue;

	/**
	 * Constructor method.
	 * @param {*} filteredValue The filtered value.
	 */
	constructor( filteredValue )
	{
		super();

		this.#_filteredValue = filteredValue;
	}

	/**
	 * Gets the filtered value.
	 * @returns {*} The filtered value.
	 */
	get filteredValue()
	{
		return this.#_filteredValue;
	}
}
