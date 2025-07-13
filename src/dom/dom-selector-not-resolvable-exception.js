'use strict';

import { Exception } from '../types/exception.js';

/**
 * Represents an exception if a selector cannot be resolved.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomSelectorNotResolvableException extends Exception
{
	/**
	 * Static constructor method.
	 * @param {String} selector The selector which cannot be resolved.
	 * @returns {DomSelectorNotResolvableException}
	 * @constructor
	 */
	static with_selector( selector )
	{
		return new this(
			String.format`The selector \`${ 0 }\` cannot be resolved.`( selector )
		);
	}
}
