'use strict';

import { AbstractStringValueFilter } from '../AbstractStringValueFilter.js';

/**
 * Represents a filter which removes surrounding whitespace from a string value.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class RemoveSurroundingWhitespaceFromStringValueFilter extends AbstractStringValueFilter
{
	/**
	 * @inheritdoc
	 * Removes surrounding whitespace from the string value.
	 */
	filter( value )
	{
		const isValid       = this._validate( value );
		const filteredValue = false === isValid
			? undefined
			: value.trim();

		this._dispatchFilteringEvent( filteredValue, this.constraint, value );

		return filteredValue;
	}
}
