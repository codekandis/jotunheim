'use strict';

import { LogicException } from '../types/logic-exception.js';

/**
 * Represents an exception if an element does not exist in the DOM.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomElementNotFoundException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param selector The selector which cannot be resolved.
	 * @returns The created exception.
	 */
	static with_unresolvableSelector( selector: string ): DomElementNotFoundException
	{
		return new this(
			String.format`The selector \`${ 0 }\` cannot be resolved.`( selector )
		);
	}

	/**
	 * Static constructor method.
	 * @param element The element which does not exist.
	 * @returns The created exception.
	 */
	static with_element( element: HTMLElement ): DomElementNotFoundException
	{
		return new this(
			String.format`The element \`${ 0 }\` does not exist.`( element )
		);
	}
}
