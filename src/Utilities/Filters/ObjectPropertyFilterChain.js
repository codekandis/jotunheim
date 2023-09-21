'use strict';

import { Collection } from '../../Collections/Collection.js';
import { Abstract } from '../../Types/Abstract.js';
import { EventManager } from '../../Types/EventManager.js';
import { InvalidTypeException } from '../../Types/InvalidTypeException.js';
import { ObjectPropertyErrorMessagesMapping } from './ObjectPropertyErrorMessagesMapping.js';
import { ObjectPropertyFilteredValuesMapping } from './ObjectPropertyFilteredValuesMapping.js';
import { ObjectPropertyFilteringFailedEvent } from './ObjectPropertyFilteringFailedEvent.js';
import { ObjectPropertyFilteringFailedEventArguments } from './ObjectPropertyFilteringFailedEventArguments.js';
import { ObjectPropertyFilteringsFailedEvent } from './ObjectPropertyFilteringsFailedEvent.js';
import { ObjectPropertyFilteringsFailedEventArguments } from './ObjectPropertyFilteringsFailedEventArguments.js';
import { ObjectPropertyFilteringsSucceededEvent } from './ObjectPropertyFilteringsSucceededEvent.js';
import { ObjectPropertyFilteringsSucceededEventArguments } from './ObjectPropertyFilteringsSucceededEventArguments.js';
import { ObjectPropertyFilteringSucceededEvent } from './ObjectPropertyFilteringSucceededEvent.js';
import { ObjectPropertyFilteringSucceededEventArguments } from './ObjectPropertyFilteringSucceededEventArguments.js';

/**
 * Represents the handler of any object property filter chain filter iteration.
 * @callback ObjectPropertyFilterChain_FilterIterationHandler
 * @param {AbstractObjectPropertyFilter} filter The currently iterated object property filter.
 * @param {Number} filterIndex The index of the currently iterated object property filter.
 */

/**
 * Represents a collection of chained object property filters.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyFilterChain extends Abstract
{
	/**
	 * Stores the object property filters of the object property filter chain.
	 * @type {AbstractObjectPropertyFilter[]}
	 */
	#_objectFilters = [];

	/**
	 * Stores the mappings of filtered object properties and filtering error messages.
	 * @type {Collection<ObjectPropertyErrorMessagesMapping>}
	 */
	#_objectPropertyErrorMessagesMappings = new Collection();

	/**
	 * Stores the mappings of filtered object properties and filtered values.
	 * @type {Collection<ObjectPropertyFilteredValuesMapping>}
	 */
	#_objectPropertyFilteredValuesMappings = new Collection();

	/**
	 * Constructor method.
	 * @param {...AbstractObjectPropertyFilter} filters The initital object property filters of the object property filter chain.
	 */
	constructor( ...filters )
	{
		super();

		this.add( ...filters );
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
	 * Gets the filterings failed event.
	 * @type {Function}
	 */
	get filteringsFailedEvent()
	{
		return new EventManager( ObjectPropertyFilteringsFailedEvent, this );
	}

	/**
	 * Gets the filterings succeeded event.
	 * @type {Function}
	 */
	get filteringsSucceededEvent()
	{
		return new EventManager( ObjectPropertyFilteringsSucceededEvent, this );
	}

	/**
	 * Gets the iterator to iterate over any object property filter chain's object property filter.
	 * @returns {IterableIterator<*>} The iterator to iterate over any object property filter chain's object property filter.
	 */
	* #filters()
	{
		const filters = this.#_objectFilters;
		for ( const filter of filters )
		{
			yield filter;
		}
	}

	/**
	 * Gets the iterator to iterate over any object property filter chain's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any object property filter chain's item.
	 */
	[ Symbol.iterator ]()
	{
		return this.#filters();
	}

	/**
	 * Static constructor method.
	 * @param {...AbstractObjectPropertyFilter[]} arrays The arrays to create the object property filter chain from.
	 * @returns {ObjectPropertyFilterChain} The created object property filter chain.
	 * @throws {InvalidTypeException} The type of at least one of the passed arrays is not `array`.
	 * @constructor
	 */
	static fromArray( ...arrays )
	{
		arrays.forEach(
			( fetchedArray ) =>
			{
				if ( false === Array.isArray( fetchedArray ) )
				{
					throw InvalidTypeException.with_type( 'array', typeof fetchedArray );
				}
			}
		);

		const objectFilterChain = new ObjectPropertyFilterChain();
		arrays.forEach(
			( fetchedArray ) =>
			{
				objectFilterChain.add( ...fetchedArray );
			}
		);

		return objectFilterChain;
	}

	/**
	 * Invokes a specific iteration handler on every object property filter chain's filter.
	 * @param {ObjectPropertyFilterChain_FilterIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		this.#_objectFilters.forEach( iterationHandler );
	}

	/**
	 * Adds a variadic amount of object property filters to the object property filter chain.
	 * @param {...AbstractObjectPropertyFilter} filters The object property filters to add.
	 */
	add( ...filters )
	{
		this.#_objectFilters.add( ...filters );
	}

	/**
	 * Filters the property of the object.
	 * @returns {Boolean} True if the property's value is valid, otherwise false.
	 */
	filter()
	{
		this.#_objectPropertyErrorMessagesMappings.clear();
		this.#_objectPropertyFilteredValuesMappings.clear();

		let filteredValue = true;
		this.#_objectFilters.forEach(
			( fetchedFilter ) =>
			{
				fetchedFilter.filteringFailedEvent( this.#objectPropertyFilter_filteringFailed );
				fetchedFilter.filteringSucceededEvent( this.#objectPropertyFilter_filteringSucceeded );

				filteredValue = fetchedFilter.filter();

				fetchedFilter.filteringSucceededEvent.remove( this.#objectPropertyFilter_filteringSucceeded );
				fetchedFilter.filteringFailedEvent.remove( this.#objectPropertyFilter_filteringFailed );
			}
		);

		if ( undefined === filteredValue )
		{
			const eventArguments = new ObjectPropertyFilteringsFailedEventArguments(
				new Collection( ...this.#_objectPropertyErrorMessagesMappings )
			);
			this.filteringsFailedEvent.dispatch( eventArguments );
		}
		else
		{
			const eventArguments = new ObjectPropertyFilteringsSucceededEventArguments(
				new Collection( ...this.#_objectPropertyFilteredValuesMappings )
			);
			this.filteringsSucceededEvent.dispatch( eventArguments );
		}

		return filteredValue;
	}

	/**
	 * Handles the filtering failed event of every object property filter.
	 * @param {ObjectPropertyFilteringFailedEvent} event
	 * @param {ObjectPropertyFilteringFailedEventArguments} event.detail.eventArguments
	 */
	#objectPropertyFilter_filteringFailed = ( event ) =>
	{
		let objectPropertyErrorMessagesMapping = this.#_objectPropertyErrorMessagesMappings.findFirstOrUndefinedBy(
			( fetchedObjectPropertyErrorMessagesMapping ) =>
			{
				return fetchedObjectPropertyErrorMessagesMapping.object === event.detail.eventArguments.object && fetchedObjectPropertyErrorMessagesMapping.propertyName === event.detail.eventArguments.propertyName;
			}
		);

		if ( undefined === objectPropertyErrorMessagesMapping )
		{
			objectPropertyErrorMessagesMapping = new ObjectPropertyErrorMessagesMapping(
				event.detail.eventArguments.object,
				event.detail.eventArguments.propertyName,
				new Collection()
			);
			this.#_objectPropertyErrorMessagesMappings.add( objectPropertyErrorMessagesMapping );
		}

		objectPropertyErrorMessagesMapping.errorMessages.add( event.detail.eventArguments.errorMessage );

		const eventArguments = new ObjectPropertyFilteringFailedEventArguments( event.detail.eventArguments.object, event.detail.eventArguments.propertyName, event.detail.eventArguments.errorMessage );
		this.filteringFailedEvent.dispatch( eventArguments );
	};

	/**
	 * Handles the filtering succeeded event of every object property filter.
	 * @param {ObjectPropertyFilteringSucceededEvent} event
	 * @param {ObjectPropertyFilteringSucceededEventArguments} event.detail.eventArguments
	 */
	#objectPropertyFilter_filteringSucceeded = ( event ) =>
	{
		let objectPropertyFilteredValuesMapping = this.#_objectPropertyFilteredValuesMappings.findFirstOrUndefinedBy(
			( fetchedObjectPropertyFilteredValuesMapping ) =>
			{
				return fetchedObjectPropertyFilteredValuesMapping.object === event.detail.eventArguments.object && fetchedObjectPropertyFilteredValuesMapping.propertyName === event.detail.eventArguments.propertyName;
			}
		);

		if ( undefined === objectPropertyFilteredValuesMapping )
		{
			objectPropertyFilteredValuesMapping = new ObjectPropertyFilteredValuesMapping(
				event.detail.eventArguments.object,
				event.detail.eventArguments.propertyName,
				new Collection()
			);
			this.#_objectPropertyFilteredValuesMappings.add( objectPropertyFilteredValuesMapping );
		}

		objectPropertyFilteredValuesMapping.filteredValues.add( event.detail.eventArguments.filteredValue );

		const eventArguments = new ObjectPropertyFilteringSucceededEventArguments( event.detail.eventArguments.object, event.detail.eventArguments.propertyName, event.detail.eventArguments.filteredValue );
		this.filteringSucceededEvent.dispatch( eventArguments );
	};
}
