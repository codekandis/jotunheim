'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { AbstractStringValueFilter } from '../AbstractStringValueFilter.js';

/**
 * Represents a filter which removes a variadic amount of trailing strings from a string value.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class RemoveTrailingStringsFromStringValueFilter extends AbstractStringValueFilter
{
	/**
	 * Stores the strings to remove.
	 * @type {Collection<String>}
	 */
	#_strings;

	/**
	 * Constructor method.
	 * @param {...String} strings The varidadic amount of trailing strings to remove.
	 */
	constructor( ...strings )
	{
		super();

		this.#_strings = new Collection( ...strings );
	}

	/**
	 * @inheritdoc
	 * Removes the variadic amount of trailing strings from the string value.
	 */
	filter( value )
	{
		const isValid       = this._validate( value );
		const filteredValue = false === isValid
			? undefined
			: value.trimStringsFromEnd( ...this.#_strings );

		this._dispatchFilteringEvent( filteredValue, this.constraint, value );

		return filteredValue;
	}
}
