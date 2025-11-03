'use strict';

import { LogicException } from '../types/logic-exception.js';

/**
 * Represents the exception if a debug mode is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidDebugModeException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {string} debugMode The invalid debug mode.
	 * @returns {InvalidDebugModeException}
	 * @constructor
	 */
	static with_debugMode( debugMode )
	{
		return new this(
			String.format`The debug mode \`${ 0 }\` is invalid.`( debugMode )
		);
	}
}
