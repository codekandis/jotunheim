'use strict';

import { AbstractStatic } from '../types/abstract-static.js';

/**
 * Represents a clipboard.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Clipboard extends AbstractStatic
{
	/**
	 * Copies a specific text to the system's clipboard.
	 * @param {string} text The text to copy to the system's clipboard.
	 */
	static copyText( text )
	{
		navigator.clipboard.writeText( text );
	}
}
