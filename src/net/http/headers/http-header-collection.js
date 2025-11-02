'use strict';

import { Collection } from '../../../collections/collection.js';
import { HttpHeaderNamePreparator } from './http-header-name-preparator.js';

/**
 * Represents the handler of any HTTP header collection HTTP header iteration.
 * @callback HttpHeaderCollection_HttpHeaderIterationHandler
 * @param {HttpHeader} httpHeader The currently iterated HTTP header.
 * @param {Number} httpHeaderIndex The index of the currently iterated HTTP header.
 */

/**
 * Represents the handler of any HTTP header collection HTTP header comparison.
 * @callback HttpHeaderCollection_HttpHeaderComparisonHandler
 * @param {HttpHeader} httpHeader_1 The first HTTP header to compare.
 * @param {HttpHeader} httpHeader_2 The second HTTP header to compare.
 * @returns {Number} -1 if the first HTTP header is lower than the second HTTP header, 0 if the first HTTP header is equal to the second HTTP header and 1 if the first HTTP header is greater than the second HTTP header.
 */

/**
 * Represents the handler of any HTTP header collection HTTP header transformation.
 * @callback HttpHeaderCollection_HttpHeaderTransformationHandler
 * @param {HttpHeader} httpHeader The currently iterated HTTP header.
 * @param {Number} httpHeaderIndex The index of the currently iterated HTTP header.
 * @returns {*} The transformed HTTP header.
 */

/**
 * Represents the handler of any HTTP header collection HTTP header determination.
 * @callback HttpHeaderCollection_HttpHeaderPredicateHandler
 * @param {HttpHeader} httpHeader The currently iterated HTTP header.
 * @param {Number} httpHeaderIndex The index of the currently iterated HTTP header.
 * @returns {Boolean} True if the iterated HTTP header matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpHeaderCollection extends Collection
{
	/**
	 * Constructor method.
	 * @param {...HttpHeader} httpHeaders The initital HTTP headers of the collection.
	 */
	constructor( ...httpHeaders )
	{
		super( ...httpHeaders );
	}

	/**
	 * Gets the number of HTTP headers in the collection.
	 * @returns {Number} The number of HTTP headers in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Creates the default predicate to compare specified HTTP headers with a fetched HTTP header of the HTTP header collection for equality by their HTTP header names.
	 * @param {...HttpHeader} httpHeaders The HTTP header to compare the fetched HTTP header with.
	 * @returns {HttpHeaderCollection_HttpHeaderPredicateHandler} The HTTP header name equality predicate handlers.
	 */
	_createHeaderNameEqualityPredicate( ...httpHeaders )
	{
		return ( fetchedHttpHeader ) =>
		{
			return httpHeaders.every(
				( fetchedPassedHttpHeader ) =>
				{
					return fetchedPassedHttpHeader.name === fetchedHttpHeader.name;
				}
			);
		};
	}

	/**
	 * Creates the default predicate to compare specified HTTP header names with a fetched HTTP header of the HTTP header collection for equality by their HTTP header names.
	 * @param {...String} httpHeaderNames The HTTP header names to compare the fetched HTTP headers with.
	 * @returns {HttpHeaderCollection_HttpHeaderPredicateHandler} The HTTP header name equality predicate handlers.
	 */
	_createHeaderNameEqualityPredicateFromHeaderNames( ...httpHeaderNames )
	{
		const httpHeaderNamePreparator = new HttpHeaderNamePreparator();

		return ( fetchedHttpHeader ) =>
		{
			return httpHeaderNames.every(
				( fetchedHttpHeaderName ) =>
				{
					const preparedHttpHeaderName = httpHeaderNamePreparator.prepare( fetchedHttpHeaderName );

					return preparedHttpHeaderName === fetchedHttpHeader.name;
				}
			);
		};
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP header.
	 * @param {HttpHeaderCollection_HttpHeaderIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP header collection includes a specific HTTP header.
	 * @param {HttpHeader} httpHeader The HTTP header to search for.
	 * @returns {Boolean} True if the HTTP headers is included in the HTTP header collection, otherwise false.
	 */
	includes( httpHeader )
	{
		return undefined !== this.findFirstOrUndefinedBy(
			this._createHeaderNameEqualityPredicate( httpHeader )
		);
	}

	/**
	 * Determines if the HTTP header collection includes an HTTP header specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP header.
	 * @returns {Boolean} True if the HTTP header is included in the HTTP header collection, otherwise false.
	 */
	includesBy( ...predicateHandlers )
	{
		return undefined !== this.findFirstOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Adds a variadic amount of HTTP headers to the HTTP header collection.
	 * @param {...HttpHeader} httpHeaders The HTTP headers to add.
	 */
	add( ...httpHeaders )
	{
		super.add( ...httpHeaders );
	}

	/**
	 * Adds a variadic amount of HTTP headers to the HTTP header collection by a specific predicate handler.
	 * @param {HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandler The predicate handler to determine the HTTP headers to add.
	 * @param {...HttpHeader} httpHeaders The HTTP headers to add.
	 */
	addBy( predicateHandler, ...httpHeaders )
	{
		super.addBy( predicateHandler, ...httpHeaders );
	}

	/**
	 * Replaces all HTTP headers in the HTTP header collection specified by their indices.
	 * @param {HttpHeader} httpHeaderReplacement The new HTTP header to replace the HTTP headers with.
	 * @param {...Number} indices The indices of the HTTP headers to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpHeaderReplacement, ...indices )
	{
		super.replaceAt( httpHeaderReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of HTTP headers in the HTTP header collection with a specified HTTP header.
	 * @param {HttpHeader} httpHeaderReplacement The new HTTP header to replace the HTTP header with.
	 * @param {...HttpHeader} httpHeaders The HTTP headers which has to be replaced.
	 */
	replace( httpHeaderReplacement, ...httpHeaders )
	{
		super.replace( httpHeaderReplacement, ...httpHeaders );
	}

	/**
	 * Replaces the first occurences of HTTP headers in the HTTP header collection specified by a variadic amount of predicate handlers with a specified HTTP header.
	 * @param {HttpHeader} httpHeaderReplacement The new HTTP header to replace the HTTP header with.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP header.
	 */
	replaceBy( httpHeaderReplacement, ...predicateHandlers )
	{
		super.replaceBy( httpHeaderReplacement, ...predicateHandlers );
	}

	/**
	 * Replaces a variadic amount of HTTP headers in the HTTP header collection with a specified HTTP header.
	 * @param {HttpHeader} httpHeaderReplacement The new HTTP header to replace the HTTP headers with.
	 * @param {...HttpHeader} httpHeaders The HTTP headers which has to be replaced.
	 */
	replaceAll( httpHeaderReplacement, ...httpHeaders )
	{
		this.replaceAllBy(
			httpHeaderReplacement,
			this._createHeaderNameEqualityPredicate( ...httpHeaders )
		);
	}

	/**
	 * Replaces all occurences of an HTTP header in the HTTP header collection specified by a variadic amount of predicate handlers.
	 * @param {HttpHeader} httpHeaderReplacement The new HTTP header to replace the HTTP headers with.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP headers.
	 */
	replaceAllBy( httpHeaderReplacement, ...predicateHandlers )
	{
		super.replaceAllBy( httpHeaderReplacement, ...predicateHandlers );
	}

	/**
	 * Adds or replaces a variadic amount of HTTP headers to / in the list. If an HTTP header will be added if it does not exist. Otherwise it will be replaced.
	 * @param {...HttpHeader} httpHeaders The HTTP headers to add or replace.
	 */
	addOrReplace( ...httpHeaders )
	{
		httpHeaders.forEach(
			( fetchedHttpHeader ) =>
			{
				const foundHttpHeaderIndex = this.findFirstIndexOfBy(
					this._createHeaderNameEqualityPredicate( fetchedHttpHeader )
				);

				if ( undefined === foundHttpHeaderIndex )
				{
					this.add( fetchedHttpHeader );

					return;
				}

				this.replaceAt( fetchedHttpHeader, foundHttpHeaderIndex );
			}
		);
	}

	/**
	 * Removes HTTP headers from the HTTP header collection specified by a variadic amount of their indices.
	 * @param {...Number} indices The index of the HTTP header to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a variadic amount of HTTP headers from the HTTP header collection.
	 * @param {...HttpHeader} httpHeaders The HTTP headers to remove.
	 */
	remove( ...httpHeaders )
	{
		this.removeBy(
			this._createHeaderNameEqualityPredicate( ...httpHeaders )
		);
	}

	/**
	 * Removes the first occurence of an HTTP header from the HTTP header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP header.
	 */
	removeBy( ...predicateHandlers )
	{
		super.removeBy( ...predicateHandlers );
	}

	/**
	 * Removes the first occurence of an HTTP header specified by their HTTP header names.
	 * @param {...String} httpHeaderNames The names of the HTTP headers to remove.
	 */
	removeByHeaderNames( ...httpHeaderNames )
	{
		this.removeBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( ...httpHeaderNames )
		);
	}

	/**
	 * Removes all occurences of a variadic amount of HTTP headers from the HTTP header collection.
	 * @param {...HttpHeader} httpHeaders The HTTP headers to remove.
	 */
	removeAll( ...httpHeaders )
	{
		this.removeAllBy(
			this._createHeaderNameEqualityPredicate( ...httpHeaders )
		);
	}

	/**
	 * Removes all occurences of HTTP headers from the HTTP header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP headers.
	 */
	removeAllBy( ...predicateHandlers )
	{
		super.removeAllBy( ...predicateHandlers );
	}

	/**
	 * Removes all occurences of HTTP headers specified by their HTTP header names.
	 * @param {...String} httpHeaderNames The names of the HTTP headers to remove.
	 */
	removeAllByHeaderName( ...httpHeaderNames )
	{
		this.removeAllBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( ...httpHeaderNames )
		);
	}

	/**
	 * Gets the first index of an HTTP header.
	 * @param {HttpHeader} httpHeader The HTTP header to determine its first index.
	 * @returns {undefined|Number} The first index of the HTTP header, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpHeader )
	{
		return this.findFirstIndexOfBy(
			this._createHeaderNameEqualityPredicate( httpHeader )
		);
	}

	/**
	 * Gets the first index of an HTTP header specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP header.
	 * @returns {undefined|Number} The first index of the HTTP header, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicateHandlers )
	{
		return super.findFirstIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the first index of an HTTP header specified by its HTTP header name.
	 * @param {String} httpHeaderName The HTTP header name of the HTTP header.
	 * @returns {undefined|Number} The first index of the HTTP header, if found, otherwise undefined.
	 */
	findFirstIndexOfByHeaderName( httpHeaderName )
	{
		return super.findFirstIndexOfBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( httpHeaderName )
		);
	}

	/**
	 * Gets the last index of an HTTP header.
	 * @param {HttpHeader} httpHeader The HTTP header to determine its last index.
	 * @returns {undefined|Number} The last index of the HTTP header, if found, otherwise undefined.
	 */
	findLastIndexOf( httpHeader )
	{
		return this.findLastIndexOfBy(
			this._createHeaderNameEqualityPredicate( httpHeader )
		);
	}

	/**
	 * Gets the last index of an HTTP header specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP header.
	 * @returns {undefined|Number} The last index of the HTTP header, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicateHandlers )
	{
		return super.findLastIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the last index of an HTTP header specified by its HTTP header names.
	 * @param {String} httpHeaderName The HTTP header name of the HTTP header.
	 * @returns {undefined|Number} The last index of the HTTP header, if found, otherwise undefined.
	 */
	findLastIndexOfByHeaderName( httpHeaderName )
	{
		return super.findLastIndexOfBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( httpHeaderName )
		);
	}

	/**
	 * Gets all indices of specific HTTP headers.
	 * @param {...HttpHeader} httpHeaders The HTTP headers to determine their indices.
	 * @returns {Collection<Number>} The indices of the HTTP headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpHeaders )
	{
		return this.findAllIndicesOfBy(
			this._createHeaderNameEqualityPredicate( ...httpHeaders )
		);
	}

	/**
	 * Gets the indices of all occurences of any HTTP header specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP headers.
	 * @returns {Collection<Number>} The indices of the HTTP headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicateHandlers )
	{
		super.findAllIndicesOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the indices of all occurences of any HTTP header specified by a variadic amount of HTTP header names.
	 * @param {...String} httpHeaderNames The HTTP header names to determine the HTTP headers.
	 * @returns {Collection<Number>} The indices of the HTTP headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByHeaderNames( ...httpHeaderNames )
	{
		super.findAllIndicesOfBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( ...httpHeaderNames )
		);
	}

	/**
	 * Gets an HTTP header from the HTTP header collection specified by its index.
	 * @param {Number} index The index of the HTTP header.
	 * @returns {undefined|HttpHeader} The HTTP header, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP header from the HTTP header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP header.
	 * @returns {undefined|HttpHeader} The first HTTP header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicateHandlers )
	{
		return super.findFirstOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the first HTTP header from the HTTP header collection specified by its HTTP header name.
	 * @param {String} httpHeaderName The HTTP header name to determine the HTTP header.
	 * @returns {undefined|HttpHeader} The first HTTP header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByHeaderName( httpHeaderName )
	{
		return super.findFirstOrUndefinedBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( httpHeaderName )
		);
	}

	/**
	 * Gets the last HTTP header from the HTTP header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP header.
	 * @returns {undefined|HttpHeader} The last HTTP header, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicateHandlers )
	{
		return super.findLastOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the last HTTP header from the HTTP header collection specified by its HTTP header name.
	 * @param {String} httpHeaderName The HTTP header name to determine the HTTP header.
	 * @returns {undefined|HttpHeader} The last HTTP header, if found, otherwise undefined.
	 */
	findLastOrUndefinedByHeaderName( httpHeaderName )
	{
		return super.findLastOrUndefinedBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( httpHeaderName )
		);
	}

	/**
	 * Gets all HTTP headers from the HTTP header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP headers.
	 * @returns {HttpHeaderCollection<HttpHeader>} The HTTP headers, if found, otherwise an empty HTTP header collection.
	 */
	findAllBy( ...predicateHandlers )
	{
		return new HttpHeaderCollection(
			...super.findAllBy( ...predicateHandlers )
		);
	}

	/**
	 * Gets all HTTP headers from the HTTP header collection specified by their HTTP header names.
	 * @param {...String} httpHeaderNames The HTTP header names to determine the HTTP headers.
	 * @returns {HttpHeaderCollection<HttpHeader>} The HTTP headers, if found, otherwise an empty HTTP header collection.
	 */
	findAllByHeaderNames( ...httpHeaderNames )
	{
		return this.findAllBy(
			this._createHeaderNameEqualityPredicateFromHeaderNames( ...httpHeaderNames )
		);
	}

	/**
	 * Sorts the HTTP header collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP header collection specified by a comparison handler.
	 * @param {HttpHeaderCollection_HttpHeaderComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP headers.
	 */
	sortBy( comparisonHandler )
	{
		super.sortBy( comparisonHandler );
	}

	/**
	 * Maps all HTTP headers of the HTTP header collection into a new collection.
	 * @param {HttpHeaderCollection_HttpHeaderTransformationHandler} transformationHandler The transformation handler used to map the HTTP header collection.
	 * @returns {Collection<*>} The collection containing the transformed HTTP headers.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Maps all HTTP headers of the collection into a new collection by a variadic amount of transformation handlers.
	 * @param {...HttpHeaderCollection_HttpHeaderTransformationHandler} transformationHandlers The transformation handlers used to map the HTTP header collection.
	 * @returns {Collection<any>} The collection containing the transformed HTTP headers.
	 */
	mapBy( ...transformationHandlers )
	{
		return new HttpHeaderCollection(
			...super.mapBy( ...transformationHandlers )
		);
	}

	/**
	 * Concatenates the HTTP headers of the collection by a specific delimiter string.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP headers.
	 * @returns {string} The concatenated string.
	 */
	join( delimiter = '' )
	{
		return super.join( delimiter );
	}

	/**
	 * Concatenates the HTTP headers of the HTTP header collection by a specific delimiter string and by a variadic amount of transformation handlers.
	 * @param {String} delimiter The delimiter used to concatenate the mapped HTTP headers.
	 * @param {...HttpHeaderCollection_HttpHeaderTransformationHandler} transformationHandlers The transformation handlers used to transform the HTTP headers.
	 * @returns {String} The concatenated string.
	 */
	joinMapped( delimiter, ...transformationHandlers )
	{
		return super.joinMapped( delimiter, ...transformationHandlers );
	}

	/**
	 * Concatenates the HTTP headers of the HTTP header collection by a specific delimiter string and by a variadic amount of predicate handlers.
	 * @param {String} delimiter The delimiter used to concatenate the HTTP headers.
	 * @param {...HttpHeaderCollection_HttpHeaderPredicateHandler} predicateHandlers The predicate handlers used to determine the HTTP headers.
	 * @returns {String} The concatenated string.
	 */
	joinBy( delimiter, ...predicateHandlers )
	{
		return this.__items.joinBy( delimiter, ...predicateHandlers );
	}

	/**
	 * Gets the array representation of the HTTP header collection.
	 * @returns {HttpHeader[]} The array representation of the HTTP header collection.
	 */
	toArray()
	{
		return super.toArray();
	}
}
