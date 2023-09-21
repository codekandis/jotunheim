'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { AbstractObjectPropertyFilter } from '../AbstractObjectPropertyFilter.js';

/**
 * Represents an object property filter filtering with an inner filter.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyWithInnerFilterFilter extends AbstractObjectPropertyFilter
{
	/**
	 * Stores the inner filter used for filtering.
	 * @type {AbstractFilter}
	 */
	#_innerFilter;

	/**
	 * Constructor method.
	 * @param {Object} object The object to filter.
	 * @param {String} propertyName The name of the object's property to filter.
	 * @param {AbstractFilter} innerFilter The inner filter used for filtering.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName, innerFilter )
	{
		super( object, propertyName );

		this.#_innerFilter = innerFilter;
	}

	/**
	 * @inheritdoc
	 * Filters the object's property with the inner filter.
	 */
	filter()
	{
		const value         = this._object[ this._propertyName ];
		const filteredValue = this.#_innerFilter.filter( value );

		if ( undefined !== filteredValue )
		{
			this._object[ this._propertyName ] = filteredValue;
		}

		this._dispatchFilteringEvent( filteredValue, this.#_innerFilter.constraint, value );

		return filteredValue;
	}
}
