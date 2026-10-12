'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if an argument is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidArgumentException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {string} name The name of the argument which is invalid.
	 * @param {any} argument The argument which is invalid.
	 * @returns {InvalidArgumentException}
	 * @constructor
	 */
	static with_argument( name, argument )
	{
		return new this(
			String.format`The argument \`${ 0 }\` with the value \`${ 1 }\` is invalid.`( argument )
		);
	}
}
