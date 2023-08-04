'use strict';

import { Exception } from '../Types/Exception.js';

/**
 * Represents an exception if a charset is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidCharSetException extends Exception
{
	/**
	 * Static constructor method.
	 * @param {String} charset The charset which is invalid.
	 * @returns {InvalidCharSetException}
	 * @constructor
	 */
	static with_charset( charset )
	{
		return new this(
			String.format`The charset \`${ 0 }\` is invalid.`( charset )
		);
	}
}
