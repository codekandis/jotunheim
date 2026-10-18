'use strict';

import { InvalidCharSetException } from '../text/invalid-char-set-exception.js';
import { AbstractStatic } from '../types/abstract-static.js';

/**
 * Formats MIME types with a charset parameter.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MimeTypeFormatter extends AbstractStatic
{
	/**
	 * Appends a charset parameter to a MIME type.
	 * @param mimeType The MIME type to format.
	 * @param charset The charset to append.
	 * @returns The MIME type with the appended charset parameter.
	 * @throws {InvalidCharSetException} The charset is empty or contains only whitespace.
	 */
	static format( mimeType: string, charset: string ): string
	{
		if ( String.empty === charset.trim() )
		{
			throw new InvalidCharSetException( 'The charset is empty.' );
		}

		return String.format`${ 0 }; charset=${ 1 }`( mimeType, charset );
	}
}
