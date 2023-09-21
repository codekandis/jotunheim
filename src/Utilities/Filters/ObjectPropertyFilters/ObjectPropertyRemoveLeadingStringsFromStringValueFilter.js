'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { RemoveLeadingStringsFromStringValueFilter } from '../SimpleFilters/RemoveLeadingStringsFromStringValueFilter.js';
import { ObjectPropertyWithInnerFilterFilter } from './ObjectPropertyWithInnerFilterFilter.js';

/**
 * Represents an object property filter removing a variadic amount of leading strings from an object's property.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyRemoveLeadingStringsFromStringValueFilter extends ObjectPropertyWithInnerFilterFilter
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to filter.
	 * @param {String} propertyName The name of the object's property to filter.
	 * @param {...String} strings The varidadic amount of leading strings to remove.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName, ...strings )
	{
		super(
			object,
			propertyName,
			new RemoveLeadingStringsFromStringValueFilter( ...strings )
		);
	}

	/**
	 * @inheritdoc
	 * Removes the variadic amount of leading strings from the object's property.
	 */
	filter()
	{
		return super.filter();
	}
}
