'use strict';

import { Exception } from '../types/exception.js';

/**
 * Represents the base class of any exception if a logic error occurred.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyValueNotFoundException extends Exception
{
	/**
	 * Static constructor method.
	 * @param propertyValue The property value which does not exist.
	 * @returns The created exception.
	 */
	static with_propertyValue( propertyValue: unknown ): PropertyValueNotFoundException
	{
		return new this(
			String.format`The property value \`${ 0 }\` does not exist.`( propertyValue )
		);
	}
}
