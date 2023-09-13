'use strict';

import { LogicException } from './LogicException.js';

/**
 * Represents the exception if a value is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidValueException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {*} value The value which is invalid.
	 * @param {?String} expected The expected value of the argument.
	 * @returns {InvalidValueException}
	 * @constructor
	 */
	static with_value( value, expected = null )
	{
		return new this(
			String.format`The value \`${ 0 }\` is invalid.${ 1 }`(
				value,
				null === expected
					? String.isEmpty
					: String.format` \`${ 0 }\` expected.`( expected )
			)
		);
	}
}
