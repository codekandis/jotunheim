'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents an exception if an index is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidIndexException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param index The index which is invalid.
	 * @returns The created exception.
	 */
	static with_index( index: number | string ): InvalidIndexException
	{
		return new this(
			String.format`The index \`${ 0 }\` is invalid.`( index )
		);
	}
}
