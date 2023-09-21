'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { RemoveLeadingWhitespaceFromStringValueFilter } from '../SimpleFilters/RemoveLeadingWhitespaceFromStringValueFilter.js';
import { ObjectPropertyWithInnerFilterFilter } from './ObjectPropertyWithInnerFilterFilter.js';

/**
 * Represents an object property filter removing the leading whitespace from an object's property.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyRemoveLeadingWhitespaceFromStringValueFilter extends ObjectPropertyWithInnerFilterFilter
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to filter.
	 * @param {String} propertyName The name of the object's property to filter.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName )
	{
		super(
			object,
			propertyName,
			new RemoveLeadingWhitespaceFromStringValueFilter()
		);
	}

	/**
	 * @inheritdoc
	 * Removes the leading whitespace from the object's property.
	 */
	filter()
	{
		return super.filter();
	}
}
