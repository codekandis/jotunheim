'use strict';

import { InvalidValueException } from './invalid-value-exception.js';

/**
 * Represents the exception if an argument is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidArgumentException extends InvalidValueException
{
	/**
	 * Static constructor method.
	 * @param {String} name The name of the argument which is invalid.
	 * @param {*} argument The argument which is invalid.
	 * @returns {InvalidValueException}
	 * @constructor
	 */
	static with_argument( name, argument )
	{
		return new this(
			String.format`The argument \`${ 0 }\` with the value \`${ 1 }\` is invalid.`( argument )
		);
	}
}
