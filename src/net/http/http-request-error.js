'use strict';

import { Abstract } from '../../types/abstract.js';

/**
 * Represents an HTTP request error.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestError extends Abstract
{
	/**
	 * Stores the error message.
	 * @type {string}
	 */
	#_message;

	/**
	 * Constructor method.
	 * @param {string} message The error message.
	 */
	constructor( message )
	{
		super();

		this.#_message = message;
	}

	/**
	 * Gets the error message.
	 * @returns {string} The error message.
	 */
	get message()
	{
		return this.#_message;
	}
}
