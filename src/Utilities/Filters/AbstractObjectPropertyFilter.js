'use strict';

import { Abstract } from '../../Types/Abstract.js';
import { EventManager } from '../../Types/EventManager.js';
import { InvalidPropertyException } from '../../Types/InvalidPropertyException.js';
import { NotImplementedException } from '../../Types/NotImplementedException.js';
import { ObjectPropertyFilteringFailedEvent } from './ObjectPropertyFilteringFailedEvent.js';
import { ObjectPropertyFilteringFailedEventArguments } from './ObjectPropertyFilteringFailedEventArguments.js';
import { ObjectPropertyFilteringSucceededEvent } from './ObjectPropertyFilteringSucceededEvent.js';
import { ObjectPropertyFilteringSucceededEventArguments } from './ObjectPropertyFilteringSucceededEventArguments.js';

/**
 * Represents the base class of any object property filter.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractObjectPropertyFilter extends Abstract
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
	 * Stores the object to filter.
	 * @type {Object}
	 */
	#_object;

	/**
	 * Stores the name of the object's property to filter.
	 * @type {String}
	 */
	#_propertyName;

	/**
	 * Constructor method.
	 * @param {Object} object The object to filter.
	 * @param {String} propertyName The name of the object's property to filter.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName )
	{
		super();

		if ( false === object.hasProperty( propertyName ) )
		{
			throw InvalidPropertyException.with_property( propertyName );
		}

		this.#_object       = object;
		this.#_propertyName = propertyName;
	}

	/**
	 * Stores the object to filter.
	 * @returns {Object} The object to filter.
	 */
	get _object()
	{
		return this.#_object;
	}

	/**
	 * Stores the name of the object's property to filter.
	 * @returns {String} The name of the object's property to filter.
	 */
	get _propertyName()
	{
		return this.#_propertyName;
	}

	/**
	 * Gets the constraint of the filtering.
	 * @return {String} The constraint of the filtering.
	 * @throws
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
		return new EventManager( ObjectPropertyFilteringFailedEvent, this );
	}

	/**
	 * Gets the filtering succeeded event.
	 * @type {Function}
	 */
	get filteringSucceededEvent()
	{
		return new EventManager( ObjectPropertyFilteringSucceededEvent, this );
	}

	/**
	 * Dispatches the appropriate filtering event based on a specific filtering result.
	 * @param {undefined|*} filteredValue The filtered value, if the value has been filtered successfully, otherwise undefined.
	 * @param {String} expectedConstraint The expected constraint.
	 * @param {undefined|*} value The filtered value, if provided, otherwise undefined.
	 */
	_dispatchFilteringEvent( filteredValue, expectedConstraint, value )
	{
		if ( undefined === filteredValue )
		{
			const eventArguments = new ObjectPropertyFilteringFailedEventArguments(
				this.#_object,
				this.#_propertyName,
				undefined === value
					? this.constructor.__ERROR_INVALID_VALUE( expectedConstraint )
					: this.constructor.__ERROR_INVALID_VALUE_WITH_VALUE( expectedConstraint, value )
			);
			this.filteringFailedEvent.dispatch( eventArguments );

			return;
		}

		const eventArguments = new ObjectPropertyFilteringSucceededEventArguments( this.#_object, this.#_propertyName, filteredValue )
		this.filteringSucceededEvent.dispatch( eventArguments );
	}

	/**
	 * Filters the object's property.
	 * @returns {undefined|*} True if the object's property is valid, otherwise false.
	 */
	filter()
	{
		throw NotImplementedException.with_abstractMethod( this, 'filter' );
	}
}
