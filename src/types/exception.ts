'use strict';

/**
 * Represents the base class of any exception.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Exception extends Error
{
	/**
	 * Stores the message of the exception.
	 */
	#_message: string;

	/**
	 * Constructor method.
	 * @param message The message of the exception.
	 */
	constructor( message: string )
	{
		super( message );

		this.#_message = message;
	}
}
