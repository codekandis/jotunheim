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
	 * @param {any} property The property which is invalid.
	 * @returns {InvalidPropertyException}
	 * @constructor
	 */
	static with_property( property )
	{
		return new this(
			String.format`The property \`${ 0 }\` is invalid.`( property )
		);
	}
}
