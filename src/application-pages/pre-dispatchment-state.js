'use strict';

import { Abstract } from '../types/abstract.js';

/**
 * Represents a pre-dispatchment state.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PreDispatchmentState extends Abstract
{
	/**
	 * Stores if the dispatchment must be prevented.
	 * @type {Boolean}
	 */
	#_preventDispatchment = false;

	/**
	 * Gets if the dispatchment must be prevented.
	 * @returns {Boolean} True if the dispatchment must be prevented, otherwise false.
	 */
	get preventDispatchment()
	{
		return this.#_preventDispatchment;
	}

	/**
	 * Gets if the dispatchment must be prevented.
	 * @param {Boolean} value True if the dispatchment must be prevented, otherwise false.
	 */
	set preventDispatchment( value )
	{
		this.#_preventDispatchment = value;
	}
}
