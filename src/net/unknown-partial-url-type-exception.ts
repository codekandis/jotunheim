'use strict';

import { LogicException } from '../types/logic-exception.js';

/**
 * Represents the exception if a partial URL type is unknown.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class UnknownPartialUrlTypeException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param partialUrlType The partial URL type which is invalid.
	 * @returns The created exception.
	 */
	static with_partialUrlType( partialUrlType: string ): UnknownPartialUrlTypeException
	{
		return new this(
			String.format`The partial URL \`${ 0 }\` is invalid.`( partialUrlType )
		);
	}
}
