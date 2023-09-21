'use strict';

import { AbstractStringValueFilter } from '../AbstractStringValueFilter.js';

/**
 * Represents a filter which removes trailing whitespace from a string value.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class RemoveTrailingWhitespaceFromStringValueFilter extends AbstractStringValueFilter
{
	/**
	 * @inheritdoc
	 * Removes trailing whitespace from the string value.
	 */
	filter( value )
	{
		const isValid       = this._validate( value );
		const filteredValue = false === isValid
			? undefined
			: value.trimEnd();

		this._dispatchFilteringEvent( filteredValue, this.constraint, value );

		return filteredValue;
	}
}
