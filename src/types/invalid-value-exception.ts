'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if a value is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidValueException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param value The value which is invalid.
	 * @returns The created exception.
	 */
	static with_value( value: unknown ): InvalidValueException
	{
		return new this(
			String.format`The value \`${ 0 }\` is invalid.`( value )
		);
	}
}
