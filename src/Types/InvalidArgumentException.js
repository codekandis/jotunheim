'use strict';

import { InvalidValueException } from './InvalidValueException.js';

/**
 * Represents the exception if an argument is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidArgumentException extends InvalidValueException
{
	/**
	 * Static constructor method.
	 * @param {String} name The name of the argument which is invalid.
	 * @param {*} value The value of the argument which is invalid.
	 * @param {?String} expected The expected value of the argument.
	 * @returns {InvalidValueException}
	 * @constructor
	 */
	static with_argument( name, value, expected = null )
	{
		return new this(
			String.format`The argument \`${ 0 }\` with the value \`${ 1 }\` is invalid.${ 2 }`(
				name,
				value,
				null === expected
					? String.isEmpty
					: String.format` \`${ 0 }\` expected.`( expected )
			)
		);
	}
}
