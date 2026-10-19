'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if a type is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidTypeException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param expectedType The expected type.
	 * @param type The type which is invalid.
	 * @returns The created exception.
	 */
	static with_type( expectedType: string, type: string ): InvalidTypeException
	{
		return new this(
			String.format`The type \`${ 1 }\` is invalid. \`${ 0 }\` expected.`( expectedType, type )
		);
	}
}
