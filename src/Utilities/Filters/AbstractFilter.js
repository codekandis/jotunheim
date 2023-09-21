'use strict';

import { Abstract } from '../../Types/Abstract.js';
import { EventManager } from '../../Types/EventManager.js';
import { NotImplementedException } from '../../Types/NotImplementedException.js';
import { FilteringFailedEvent } from './FilteringFailedEvent.js';
import { FilteringFailedEventArguments } from './FilteringFailedEventArguments.js';
import { FilteringSucceededEvent } from './FilteringSucceededEvent.js';
import { FilteringSucceededEventArguments } from './FilteringSucceededEventArguments.js';

/**
 * Represents the base class of any filter.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractFilter extends Abstract
{
	/**
	 * Represents the error message if a value is invalid.
	 * @type {String_ReplacementHandler}
	 */
	static get __ERROR_INVALID_VALUE()
	{
		return String.format`Invalid value. \`${ 0 }\` expected.`;
	}

	/**
	 * Represents the error message if a value is invalid containing the value itself.
	 * @type {String_ReplacementHandler}
	 */
	static get __ERROR_INVALID_VALUE_WITH_VALUE()
	{
		return String.format`Invalid value \`${ 1 }\`. \`${ 0 }\` expected.`;
	}

	/**
	 * Gets the constraint of the filtering.
	 * @returns {String} The constraint of the filtering.
	 */
	get constraint()
	{
		throw NotImplementedException.with_abstractConstant( this, 'constraint' );
	}

	/**
	 * Gets the filtering failed event.
	 * @type {Function}
	 */
	get filteringFailedEvent()
	{
		return new EventManager( FilteringFailedEvent, this );
	}

	/**
	 * Gets the filtering succeeded event.
	 * @type {Function}
	 */
	get filteringSucceededEvent()
	{
		return new EventManager( FilteringSucceededEvent, this );
	}

	/**
	 * Dispatches the appropriate filtering event based on a specific filtering result.
	 * @param {undefined|*} filteredValue The filtered value, if the value has been filtered successfully, otherwise undefined.
	 * @param {String} expectedConstraint The expected constraint.
	 * @param {undefined|*} value The filtered value, if provided, otherwise undefined.
	 */
	_dispatchFilteringEvent( filteredValue, expectedConstraint, value = undefined )
	{
		if ( undefined === filteredValue )
		{
			const eventArguments = new FilteringFailedEventArguments(
				undefined === value
					? this.constructor.__ERROR_INVALID_VALUE( expectedConstraint )
					: this.constructor.__ERROR_INVALID_VALUE_WITH_VALUE( expectedConstraint, value )
			);
			this.filteringFailedEvent.dispatch( eventArguments );

			return;
		}

		const eventArguments = new FilteringSucceededEventArguments( filteredValue );
		this.filteringSucceededEvent.dispatch( eventArguments );
	}

	/**
	 * Filters a value.
	 * @param {*} value The value to filter.
	 * @returns {undefined|*} The filtered value if the filtering has been succeeded, otherwise undefined.
	 */
	filter( value )
	{
		throw NotImplementedException.with_abstractMethod( this, 'filter' );
	}
}
