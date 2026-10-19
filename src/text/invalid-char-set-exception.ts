'use strict';

import { Exception } from '../types/exception.js';

/**
 * Represents an exception if a charset is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidCharSetException extends Exception
{
	/**
	 * Static constructor method.
	 * @param charset The charset which is invalid.
	 * @returns The created exception.
	 */
	static with_charset( charset: string ): InvalidCharSetException
	{
		return new this(
			String.format`The charset \`${ 0 }\` is invalid.`( charset )
		);
	}
}
