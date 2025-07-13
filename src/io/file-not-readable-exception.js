'use strict';

import { IoException } from './io-exception.js';

/**
 * Represents an exception if a file is not readable.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileNotReadableException extends IoException
{
	/**
	 * Static constructor method.
	 * @param {File} file The file which is not readable.
	 * @returns {FileNotReadableException}
	 * @constructor
	 */
	static with_file( file )
	{
		return new this(
			String.format`The file \`${ 0 }\` is not readable.`( file.name )
		);
	}
}
