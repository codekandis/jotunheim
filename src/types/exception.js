'use strict';

/**
 * Represents the base class of any exception.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Exception extends Error
{
	/**
	 * Stores the message of the exception.
	 * @type {string}
	 */
	#_message;

	/**
	 * Constructor method.
	 * @param {string} message The message of the exception.
	 */
	constructor( message )
	{
		super( message );

		this.#_message = message;
	}
}
