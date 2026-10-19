'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if a property is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidPropertyException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param property The property which is invalid.
	 * @returns The created exception.
	 */
	static with_property( property: unknown ): InvalidPropertyException
	{
		return new this(
			String.format`The property \`${ 0 }\` is invalid.`( property )
		);
	}
}
