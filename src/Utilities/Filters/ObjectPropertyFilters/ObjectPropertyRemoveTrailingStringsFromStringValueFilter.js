'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { RemoveTrailingStringsFromStringValueFilter } from '../SimpleFilters/RemoveTrailingStringsFromStringValueFilter.js';
import { ObjectPropertyWithInnerFilterFilter } from './ObjectPropertyWithInnerFilterFilter.js';

/**
 * Represents an object property filter removing a variadic amount of trailing strings from an object's property.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyRemoveTrailingStringsFromStringValueFilter extends ObjectPropertyWithInnerFilterFilter
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to filter.
	 * @param {String} propertyName The name of the object's property to filter.
	 * @param {...String} strings The varidadic amount of trailing strings to remove.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName, ...strings )
	{
		super(
			object,
			propertyName,
			new RemoveTrailingStringsFromStringValueFilter( ...strings )
		);
	}

	/**
	 * @inheritdoc
	 * Removes the variadic amount of trailing strings from the object's property.
	 */
	filter()
	{
		return super.filter();
	}
}
