'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the filterings succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FilteringsSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the filtered values.
	 * @type {Collection<*>}
	 */
	#_filteredValues;

	/**
	 * Constructor method.
	 * @param {Collection<*>} filteredValues The filtered values.
	 */
	constructor( filteredValues )
	{
		super();

		this.#_filteredValues = filteredValues;
	}

	/**
	 * Gets the filtered values.
	 * @returns {Collection<*>} The filtered values.
	 */
	get filteredValues()
	{
		return this.#_filteredValues;
	}
}
