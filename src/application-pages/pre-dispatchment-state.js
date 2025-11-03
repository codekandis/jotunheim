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
	 * @type {boolean}
	 */
	#_preventDispatchment = false;

	/**
	 * Gets if the dispatchment must be prevented.
	 * @returns {boolean} True if the dispatchment must be prevented, otherwise false.
	 */
	get preventDispatchment()
	{
		return this.#_preventDispatchment;
	}

	/**
	 * Gets if the dispatchment must be prevented.
	 * @param {boolean} value True if the dispatchment must be prevented, otherwise false.
	 */
	set preventDispatchment( value )
	{
		this.#_preventDispatchment = value;
	}
}
