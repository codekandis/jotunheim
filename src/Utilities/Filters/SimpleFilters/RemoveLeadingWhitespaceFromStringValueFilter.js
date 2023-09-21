'use strict';

import { AbstractStringValueFilter } from '../AbstractStringValueFilter.js';

/**
 * Represents a filter which removes leading whitespace from a string value.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class RemoveLeadingWhitespaceFromStringValueFilter extends AbstractStringValueFilter
{
	/**
	 * @inheritdoc
	 * Removes leading whitespace from the string value.
	 */
	filter( value )
	{
		const isValid       = this._validate( value );
		const filteredValue = false === isValid
			? undefined
			: value.trimStart();

		this._dispatchFilteringEvent( filteredValue, this.constraint, value );

		return filteredValue;
	}
}
