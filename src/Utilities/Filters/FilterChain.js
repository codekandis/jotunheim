'use strict';

import { Collection } from '../../Collections/Collection.js';
import { EventManager } from '../../Types/EventManager.js';
import { InvalidTypeException } from '../../Types/InvalidTypeException.js';
import { AbstractFilter } from './AbstractFilter.js';
import { FilteringFailedEvent } from './FilteringFailedEvent.js';
import { FilteringFailedEventArguments } from './FilteringFailedEventArguments.js';
import { FilteringsFailedEvent } from './FilteringsFailedEvent.js';
import { FilteringsFailedEventArguments } from './FilteringsFailedEventArguments.js';
import { FilteringsSucceededEvent } from './FilteringsSucceededEvent.js';
import { FilteringsSucceededEventArguments } from './FilteringsSucceededEventArguments.js';
import { FilteringSucceededEvent } from './FilteringSucceededEvent.js';
import { FilteringSucceededEventArguments } from './FilteringSucceededEventArguments.js';

/**
 * Represents the handler of any filter chain filter iteration.
 * @callback FilterChain_FilterIterationHandler
 * @param {AbstractFilter} filter The currently iterated filter.
 * @param {Number} filterIndex The index of the currently iterated filter.
 */

/**
 * Represents a collection of chained filters.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FilterChain extends AbstractFilter
{
	/**
	 * Stores the filters of the filter chain.
	 * @type {AbstractFilter[]}
	 */
	#_filters = [];

	/**
	 * Stores the error messages of the filtering.
	 * @type {Collection<String>}
	 */
	#_errorMessages = new Collection();

	/**
	 * Stores the filtered values of the filtering.
	 * @type {Collection<*>}
	 */
	#_filteredValues = new Collection();

	/**
	 * Constructor method.
	 * @param {...AbstractFilter} filters The initital filters of the filter chain.
	 */
	constructor( ...filters )
	{
		super();

		this.add( ...filters );
	}

	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return String.format`{ ${ 0 } }`(
			this.#_filters.joinMapped(
				'; ',
				( fetchedFilter ) =>
				{
					return fetchedFilter.constraint;
				}
			)
		);
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
	 * Gets the filterings failed event.
	 * @type {Function}
	 */
	get filteringsFailedEvent()
	{
		return new EventManager( FilteringsFailedEvent, this );
	}

	/**
	 * Gets the filterings succeeded event.
	 * @type {Function}
	 */
	get filteringsSucceededEvent()
	{
		return new EventManager( FilteringsSucceededEvent, this );
	}

	/**
	 * Gets the iterator to iterate over any filter chain's filter.
	 * @returns {IterableIterator<*>} The iterator to iterate over any filter chain's filter.
	 */
	* #filters()
	{
		const filters = this.#_filters;
		for ( const filter of filters )
		{
			yield filter;
		}
	}

	/**
	 * Gets the iterator to iterate over any filter chain's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any filter chain's item.
	 */
	[ Symbol.iterator ]()
	{
		return this.#filters();
	}

	/**
	 * Static constructor method.
	 * @param {...AbstractFilter[]} arrays The arrays to create the filter chain from.
	 * @returns {FilterChain} The created filter chain.
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

		const filterChain = new FilterChain();
		arrays.forEach(
			( fetchedArray ) =>
			{
				filterChain.add( ...fetchedArray );
			}
		);

		return filterChain;
	}

	/**
	 * Invokes a specific iteration handler on every filter chain's filter.
	 * @param {FilterChain_FilterIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		this.#_filters.forEach( iterationHandler );
	}

	/**
	 * Adds a variadic amount of filters to the filter chain.
	 * @param {...AbstractFilter} filters The filters to add.
	 */
	add( ...filters )
	{
		this.#_filters.add( ...filters );
	}

	/**
	 * Filters a value.
	 * @param {*} value The value to filter.
	 * @returns {undefined|*} The filtered value if the filtering has been succeeded, otherwise undefined.
	 */
	filter( value )
	{
		this.#_errorMessages.clear();
		this.#_filteredValues.clear();

		let filteredValue = value;
		this.#_filters.forEach(
			( fetchedFilter ) =>
			{
				fetchedFilter.filteringFailedEvent( this.#filter_filteringFailed );
				fetchedFilter.filteringSucceededEvent( this.#filter_filteringSucceeded );

				filteredValue = fetchedFilter.filter( filteredValue );

				fetchedFilter.filteringSucceededEvent.remove( this.#filter_filteringSucceeded );
				fetchedFilter.filteringFailedEvent.remove( this.#filter_filteringFailed );
			}
		);

		if ( undefined === filteredValue )
		{
			const eventArguments = new FilteringsFailedEventArguments(
				new Collection( ...this.#_errorMessages )
			);
			this.filteringsFailedEvent.dispatch( eventArguments );
		}
		else
		{
			const eventArguments = new FilteringsSucceededEventArguments(
				new Collection( ...this.#_filteredValues )
			);
			this.filteringsSucceededEvent.dispatch( eventArguments );
		}

		return filteredValue;
	}

	/**
	 * Handles the filtering failed event of every filter.
	 * @param {FilteringFailedEvent} event
	 * @param {FilteringFailedEventArguments} event.detail.eventArguments
	 */
	#filter_filteringFailed = ( event ) =>
	{
		this.#_errorMessages.add( event.detail.eventArguments.errorMessage );

		const eventArguments = new FilteringFailedEventArguments( event.detail.eventArguments.errorMessage );
		this.filteringFailedEvent.dispatch( eventArguments );
	};

	/**
	 * Handles the filtering succeeded event of every filter.
	 * @param {FilteringsSucceededEvent} event
	 * @param {EventArguments} event.detail.eventArguments
	 */
	#filter_filteringSucceeded = ( event ) =>
	{
		this.#_filteredValues.add( event.detail.eventArguments.filteredValue );

		const eventArguments = new FilteringSucceededEventArguments( event.detail.eventArguments.filteredValue );
		this.filteringSucceededEvent.dispatch( eventArguments );
	};
}
