'use strict';

import { HttpHeaderCollection } from './http-header-collection.js';

/**
 * Represents the handler of any HTTP response header collection HTTP response header iteration.
 * @callback HttpResponseHeaderCollection_HttpResponseHeaderIterationHandler
 * @param {HttpResponseHeader} httpResponseHeader The currently iterated HTTP response header.
 * @param {number} httpResponseHeaderIndex The index of the currently iterated HTTP response header.
 */

/**
 * Represents the handler of any HTTP response header collection HTTP response header comparison.
 * @callback HttpResponseHeaderCollection_HttpResponseHeaderComparisonHandler
 * @param {HttpResponseHeader} httpResponseHeader_1 The first HTTP response header to compare.
 * @param {HttpResponseHeader} httpResponseHeader_2 The second HTTP response header to compare.
 * @returns {number} -1 if the first HTTP response header is lower than the second HTTP response header, 0 if the first HTTP response header is equal to the second HTTP response header and 1 if the first HTTP response header is greater than the second HTTP response header.
 */

/**
 * Represents the handler of any HTTP response header collection HTTP response header transformation.
 * @callback HttpResponseHeaderCollection_HttpResponseHeaderTransformationHandler
 * @param {HttpResponseHeader} httpResponseHeader The currently iterated HTTP response header.
 * @param {number} httpResponseHeaderIndex The index of the currently iterated HTTP response header.
 * @returns {any} The transformed HTTP response header.
 */

/**
 * Represents the handler of any HTTP response header collection HTTP response header determination.
 * @callback HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler
 * @param {HttpResponseHeader} httpResponseHeader The currently iterated HTTP response header.
 * @param {number} httpResponseHeaderIndex The index of the currently iterated HTTP response header.
 * @returns {boolean} True if the iterated HTTP response header matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP response headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpResponseHeaderCollection extends HttpHeaderCollection
{
	/**
	 * Constructor method.
	 * @param {...HttpResponseHeader} httpResponseHeaders The initital HTTP response headers of the collection.
	 */
	constructor( ...httpResponseHeaders )
	{
		super( ...httpResponseHeaders );
	}

	/**
	 * Gets the number of HTTP response headers in the collection.
	 * @returns {number} The number of HTTP response headers in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Creates the default predicate to compare specified HTTP response headers with a fetched HTTP response header of the HTTP response header collection for equality by their HTTP response header names.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response header to compare the fetched HTTP response header with.
	 * @returns {HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} The HTTP response header name equality predicate handlers.
	 */
	_createHeaderNameEqualityPredicate( ...httpResponseHeaders )
	{
		return super._createHeaderNameEqualityPredicate( ...httpResponseHeaders );
	}

	/**
	 * Creates the default predicate to compare specified HTTP response header names with a fetched HTTP response header of the HTTP response header collection for equality by their HTTP response header names.
	 * @param {...string} httpResponseHeaderNames The HTTP response header names to compare the fetched HTTP response headers with.
	 * @returns {HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} The HTTP response header name equality predicate handlers.
	 */
	_createHeaderNameEqualityPredicateFromHeaderNames( ...httpResponseHeaderNames )
	{
		return super._createHeaderNameEqualityPredicateFromHeaderNames( httpResponseHeaderNames );
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP response header.
	 * @param {HttpHeaderCollection_HttpHeaderIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP response header collection includes a specific HTTP response header.
	 * @param {HttpResponseHeader} httpResponseHeader The HTTP response header to search for.
	 * @returns {boolean} True if the HTTP response headers is included in the HTTP response header collection, otherwise false.
	 */
	includes( httpResponseHeader )
	{
		return super.includes( httpResponseHeader );
	}

	/**
	 * Determines if the HTTP response header collection includes an HTTP response header specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response header.
	 * @returns {boolean} True if the HTTP response header is included in the HTTP response header collection, otherwise false.
	 */
	includesBy( ...predicateHandlers )
	{
		return super.includesBy( ...predicateHandlers );
	}

	/**
	 * Adds a variadic amount of HTTP response headers to the HTTP response header collection.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers to add.
	 */
	add( ...httpResponseHeaders )
	{
		super.add( ...httpResponseHeaders );
	}

	/**
	 * Adds a variadic amount of HTTP response headers to the HTTP response header collection by a specific predicate handler.
	 * @param {HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandler The predicate handler to determine the HTTP response headers to add.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers to add.
	 */
	addBy( predicateHandler, ...httpResponseHeaders )
	{
		super.addBy( predicateHandler, ...httpResponseHeaders );
	}

	/**
	 * Replaces all HTTP response headers in the HTTP response header collection specified by their indices.
	 * @param {HttpResponseHeader} httpResponseHeaderReplacement The new HTTP response header to replace the HTTP response headers with.
	 * @param {...number} indices The indices of the HTTP response headers to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpResponseHeaderReplacement, ...indices )
	{
		super.replaceAt( httpResponseHeaderReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of HTTP response headers in the HTTP response header collection with a specified HTTP response header.
	 * @param {HttpResponseHeader} httpResponseHeaderReplacement The new HTTP response header to replace the HTTP response header with.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers which has to be replaced.
	 */
	replace( httpResponseHeaderReplacement, ...httpResponseHeaders )
	{
		super.replace( httpResponseHeaderReplacement, ...httpResponseHeaders );
	}

	/**
	 * Replaces the first occurences of HTTP response headers in the HTTP response header collection specified by a variadic amount of predicate handlers with a specified HTTP response header.
	 * @param {HttpResponseHeader} httpResponseHeaderReplacement The new HTTP response header to replace the HTTP response header with.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response header.
	 */
	replaceBy( httpResponseHeaderReplacement, ...predicateHandlers )
	{
		super.replaceBy( httpResponseHeaderReplacement, ...predicateHandlers );
	}

	/**
	 * Replaces a variadic amount of HTTP response headers in the HTTP response header collection with a specified HTTP response header.
	 * @param {HttpResponseHeader} httpResponseHeaderReplacement The new HTTP response header to replace the HTTP response headers with.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers which has to be replaced.
	 */
	replaceAll( httpResponseHeaderReplacement, ...httpResponseHeaders )
	{
		super.replaceAll( httpResponseHeaderReplacement, ...httpResponseHeaders );
	}

	/**
	 * Replaces all occurences of an HTTP response header in the HTTP response header collection specified by a variadic amount of predicate handlers.
	 * @param {HttpResponseHeader} httpResponseHeaderReplacement The new HTTP response header to replace the HTTP response headers with.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response headers.
	 */
	replaceAllBy( httpResponseHeaderReplacement, ...predicateHandlers )
	{
		super.replaceAllBy( httpResponseHeaderReplacement, ...predicateHandlers );
	}

	/**
	 * Adds or replaces a variadic amount of HTTP response headers to / in the list. If an HTTP response header will be added if it does not exist. Otherwise it will be replaced.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers to add or replace.
	 */
	addOrReplace( ...httpResponseHeaders )
	{
		super.addOrReplace( ...httpResponseHeaders );
	}

	/**
	 * Removes HTTP response headers from the HTTP response header collection specified by a variadic amount of their indices.
	 * @param {...number} indices The index of the HTTP response header to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a variadic amount of HTTP response headers from the HTTP response header collection.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers to remove.
	 */
	remove( ...httpResponseHeaders )
	{
		super.remove( ...httpResponseHeaders );
	}

	/**
	 * Removes the first occurence of an HTTP response header from the HTTP response header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response header.
	 */
	removeBy( ...predicateHandlers )
	{
		super.removeBy( ...predicateHandlers );
	}

	/**
	 * Removes the first occurence of an HTTP response header specified by their HTTP response header names.
	 * @param {...string} httpResponseHeaderNames The names of the HTTP response headers to remove.
	 */
	removeByHeaderNames( ...httpResponseHeaderNames )
	{
		super.removeByHeaderNames( ...httpResponseHeaderNames );
	}

	/**
	 * Removes all occurences of a variadic amount of HTTP response headers from the HTTP response header collection.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers to remove.
	 */
	removeAll( ...httpResponseHeaders )
	{
		super.removeAll( ...httpResponseHeaders );
	}

	/**
	 * Removes all occurences of HTTP response headers from the HTTP response header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response headers.
	 */
	removeAllBy( ...predicateHandlers )
	{
		super.removeAllBy( ...predicateHandlers );
	}

	/**
	 * Removes all occurences of HTTP response headers specified by their HTTP response header names.
	 * @param {...string} httpResponseHeaderNames The names of the HTTP response headers to remove.
	 */
	removeAllByHeaderName( ...httpResponseHeaderNames )
	{
		super.removeAllByHeaderName( ...httpResponseHeaderNames );
	}

	/**
	 * Gets the first index of an HTTP response header.
	 * @param {HttpResponseHeader} httpResponseHeader The HTTP response header to determine its first index.
	 * @returns {undefined|number} The first index of the HTTP response header, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpResponseHeader )
	{
		super.findFirstIndexOf( httpResponseHeader );
	}

	/**
	 * Gets the first index of an HTTP response header specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response header.
	 * @returns {undefined|number} The first index of the HTTP response header, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicateHandlers )
	{
		return super.findFirstIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the first index of an HTTP response header specified by its HTTP response header name.
	 * @param {string} httpResponseHeaderName The HTTP response header name of the HTTP response header.
	 * @returns {undefined|number} The first index of the HTTP response header, if found, otherwise undefined.
	 */
	findFirstIndexOfByHeaderName( httpResponseHeaderName )
	{
		return super.findFirstIndexOfByHeaderName( httpResponseHeaderName );
	}

	/**
	 * Gets the last index of an HTTP response header.
	 * @param {HttpResponseHeader} httpResponseHeader The HTTP response header to determine its last index.
	 * @returns {undefined|number} The last index of the HTTP response header, if found, otherwise undefined.
	 */
	findLastIndexOf( httpResponseHeader )
	{
		return super.findLastIndexOf( httpResponseHeader );
	}

	/**
	 * Gets the last index of an HTTP response header specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response header.
	 * @returns {undefined|number} The last index of the HTTP response header, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicateHandlers )
	{
		return super.findLastIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the last index of an HTTP response header specified by its HTTP response header names.
	 * @param {string} httpResponseHeaderName The HTTP response header name of the HTTP response header.
	 * @returns {undefined|number} The last index of the HTTP response header, if found, otherwise undefined.
	 */
	findLastIndexOfByHeaderName( httpResponseHeaderName )
	{
		return super.findLastIndexOfByHeaderName( httpResponseHeaderName );
	}

	/**
	 * Gets all indices of specific HTTP response headers.
	 * @param {...HttpResponseHeader} httpResponseHeaders The HTTP response headers to determine their indices.
	 * @returns {Collection<number>} The indices of the HTTP response headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpResponseHeaders )
	{
		return super.findAllIndicesOf( ...httpResponseHeaders );
	}

	/**
	 * Gets the indices of all occurences of any HTTP response header specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response headers.
	 * @returns {Collection<number>} The indices of the HTTP response headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicateHandlers )
	{
		super.findAllIndicesOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the indices of all occurences of any HTTP response header specified by a variadic amount of HTTP response header names.
	 * @param {...string} httpResponseHeaderNames The HTTP response header names to determine the HTTP response headers.
	 * @returns {Collection<number>} The indices of the HTTP response headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByHeaderNames( ...httpResponseHeaderNames )
	{
		super.findAllIndicesOfByHeaderNames( ...httpResponseHeaderNames );
	}

	/**
	 * Gets an HTTP response header from the HTTP response header collection specified by its index.
	 * @param {number} index The index of the HTTP response header.
	 * @returns {undefined|HttpResponseHeader} The HTTP response header, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP response header from the HTTP response header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response header.
	 * @returns {undefined|HttpResponseHeader} The first HTTP response header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicateHandlers )
	{
		return super.findFirstOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the first HTTP response header from the HTTP response header collection specified by its HTTP response header name.
	 * @param {string} httpResponseHeaderName The HTTP response header name to determine the HTTP response header.
	 * @returns {undefined|HttpResponseHeader} The first HTTP response header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByHeaderName( httpResponseHeaderName )
	{
		return super.findFirstOrUndefinedByHeaderName( httpResponseHeaderName );
	}

	/**
	 * Gets the last HTTP response header from the HTTP response header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response header.
	 * @returns {undefined|HttpResponseHeader} The last HTTP response header, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicateHandlers )
	{
		return super.findLastOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the last HTTP response header from the HTTP response header collection specified by its HTTP response header name.
	 * @param {string} httpResponseHeaderName The HTTP response header name to determine the HTTP response header.
	 * @returns {undefined|HttpResponseHeader} The last HTTP response header, if found, otherwise undefined.
	 */
	findLastOrUndefinedByHeaderName( httpResponseHeaderName )
	{
		return super.findLastOrUndefinedByHeaderName( httpResponseHeaderName );
	}

	/**
	 * Gets all HTTP response headers from the HTTP response header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP response headers.
	 * @returns {HttpResponseHeaderCollection<HttpResponseHeader>} The HTTP response headers, if found, otherwise an empty HTTP response header collection.
	 */
	findAllBy( ...predicateHandlers )
	{
		return super.findAllBy( ...predicateHandlers );
	}

	/**
	 * Gets all HTTP response headers from the HTTP response header collection specified by their HTTP response header names.
	 * @param {...string} httpResponseHeaderNames The HTTP response header names to determine the HTTP response headers.
	 * @returns {HttpResponseHeaderCollection<HttpResponseHeader>} The HTTP response headers, if found, otherwise an empty HTTP response header collection.
	 */
	findAllByHeaderNames( ...httpResponseHeaderNames )
	{
		return super.findAllByHeaderNames( ...httpResponseHeaderNames );
	}

	/**
	 * Sorts the HTTP response header collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP response header collection specified by a comparison handler.
	 * @param {HttpResponseHeaderCollection_HttpResponseHeaderComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP response headers.
	 */
	sortBy( comparisonHandler )
	{
		super.sortBy( comparisonHandler );
	}

	/**
	 * Maps all HTTP response headers of the HTTP response header collection into a new collection.
	 * @param {HttpResponseHeaderCollection_HttpResponseHeaderTransformationHandler} transformationHandler The transformation handler used to map the HTTP response header collection.
	 * @returns {Collection<any>} The collection containing the transformed HTTP response headers.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Maps all HTTP response headers of the collection into a new collection by a variadic amount of transformation handlers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderTransformationHandler} transformationHandlers The transformation handlers used to map the HTTP response header collection.
	 * @returns {Collection<any>} The collection containing the transformed HTTP response headers.
	 */
	mapBy( ...transformationHandlers )
	{
		return new HttpResponseHeaderCollection(
			...super.mapBy( ...transformationHandlers )
		);
	}

	/**
	 * Concatenates the HTTP response headers of the collection by a specific delimiter string.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP response headers.
	 * @returns {string} The concatenated string.
	 */
	join( delimiter = '' )
	{
		return super.join( delimiter );
	}

	/**
	 * Concatenates the HTTP response headers of the HTTP response header collection by a specific delimiter string and by a variadic amount of transformation handlers.
	 * @param {string} delimiter The delimiter used to concatenate the mapped HTTP response headers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderTransformationHandler} transformationHandlers The transformation handlers used to transform the HTTP response headers.
	 * @returns {string} The concatenated string.
	 */
	joinMapped( delimiter, ...transformationHandlers )
	{
		return super.joinMapped( delimiter, ...transformationHandlers );
	}

	/**
	 * Concatenates the HTTP response headers of the HTTP response header collection by a specific delimiter string and by a variadic amount of predicate handlers.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP response headers.
	 * @param {...HttpResponseHeaderCollection_HttpResponseHeaderPredicateHandler} predicateHandlers The predicate handlers used to determine the HTTP response headers.
	 * @returns {string} The concatenated string.
	 */
	joinBy( delimiter, ...predicateHandlers )
	{
		return super.joinBy( delimiter, ...predicateHandlers );
	}

	/**
	 * Gets the array representation of the HTTP response header collection.
	 * @returns {Array<HttpResponseHeader>} The array representation of the HTTP response header collection.
	 */
	toArray()
	{
		return super.toArray();
	}
}
