'use strict';

import { LogicException } from './LogicException.js';

/**
 * Represents the exception if a type is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidTypeException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {String} expectedType The expected type.
	 * @param {String} type The type which is invalid.
	 * @returns {InvalidTypeException}
	 * @constructor
	 */
	static with_type( expectedType, type )
	{
		return new this(
			String.format`The type \`${ 1 }\` is invalid. \`${ 0 }\` expected.`( expectedType, type )
		);
	}
}
