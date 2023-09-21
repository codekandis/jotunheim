'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { AbstractStringValueFilter } from '../AbstractStringValueFilter.js';

/**
 * Represents a filter which removes a variadic amount of surrounding strings from a string value.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class RemoveSurroundingStringsFromStringValueFilter extends AbstractStringValueFilter
{
	/**
	 * Stores the strings to remove.
	 * @type {Collection<String>}
	 */
	#_strings;

	/**
	 * Constructor method.
	 * @param {...String} strings The varidadic amount of surrounding strings to remove.
	 */
	constructor( ...strings )
	{
		super();

		this.#_strings = new Collection( ...strings );
	}

	/**
	 * @inheritdoc
	 * Removes the variadic amount of surrounding strings from the string value.
	 */
	filter( value )
	{
		const isValid       = this._validate( value );
		const filteredValue = false === isValid
			? undefined
			: value.trimStrings( ...this.#_strings );

		this._dispatchFilteringEvent( filteredValue, this.constraint, value );

		return filteredValue;
	}
}
