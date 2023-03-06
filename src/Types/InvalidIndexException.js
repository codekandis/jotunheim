'use strict';

import { LogicException } from './LogicException.js';

/**
 * Represents an exception if an index is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidIndexException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {Number|String} index The index which is invalid.
	 * @returns {InvalidIndexException}
	 * @constructor
	 */
	static with_index( index )
	{
		return new this(
			String.format`The index \`${ 0 }\` is invalid.`( index )
		);
	}
}
