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
	 * @param selector The selector which cannot be resolved.
	 * @returns The created exception.
	 */
	static with_selector( selector: string ): DomSelectorNotResolvableException
	{
		return new this(
			String.format`The selector \`${ 0 }\` cannot be resolved.`( selector )
		);
	}
}
