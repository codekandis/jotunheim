'use strict';

import { Exception } from '../types/exception.js';

/**
 * Represents the base class of any exception if a logic error occured.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyValueNotFoundException extends Exception
{
	/**
	 * Static constructor method.
	 * @param {any} propertyValue The property value which does not exist.
	 * @returns {PropertyValueNotFoundException}
	 * @constructor
	 */
	static with_propertyValue( propertyValue )
	{
		return new this(
			String.format`The property value \`${ 0 }\` does not exist.`( propertyValue )
		);
	}
}
