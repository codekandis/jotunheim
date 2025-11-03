'use strict';

import { HttpHeaderCollection } from './http-header-collection.js';

/**
 * Represents the handler of any HTTP request header collection HTTP request header iteration.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderIterationHandler
 * @param {HttpRequestHeader} httpRequestHeader The currently iterated HTTP request header.
 * @param {number} httpRequestHeaderIndex The index of the currently iterated HTTP request header.
 */

/**
 * Represents the handler of any HTTP request header collection HTTP request header comparison.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderComparisonHandler
 * @param {HttpRequestHeader} httpRequestHeader_1 The first HTTP request header to compare.
 * @param {HttpRequestHeader} httpRequestHeader_2 The second HTTP request header to compare.
 * @returns {number} -1 if the first HTTP request header is lower than the second HTTP request header, 0 if the first HTTP request header is equal to the second HTTP request header and 1 if the first HTTP request header is greater than the second HTTP request header.
 */

/**
 * Represents the handler of any HTTP request header collection HTTP request header transformation.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderTransformationHandler
 * @param {HttpRequestHeader} httpRequestHeader The currently iterated HTTP request header.
 * @param {number} httpRequestHeaderIndex The index of the currently iterated HTTP request header.
 * @returns {any} The transformed HTTP request header.
 */

/**
 * Represents the handler of any HTTP request header collection HTTP request header determination.
 * @callback HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler
 * @param {HttpRequestHeader} httpRequestHeader The currently iterated HTTP request header.
 * @param {number} httpRequestHeaderIndex The index of the currently iterated HTTP request header.
 * @returns {boolean} True if the iterated HTTP request header matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP request headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestHeaderCollection extends HttpHeaderCollection
{
	/**
	 * Constructor method.
	 * @param {...HttpRequestHeader} httpRequestHeaders The initital HTTP request headers of the collection.
	 */
	constructor( ...httpRequestHeaders )
	{
		super( ...httpRequestHeaders );
	}

	/**
	 * Gets the number of HTTP request headers in the collection.
	 * @returns {number} The number of HTTP request headers in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Creates the default predicate to compare specified HTTP request headers with a fetched HTTP request header of the HTTP request header collection for equality by their HTTP request header names.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request header to compare the fetched HTTP request header with.
	 * @returns {HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} The HTTP request header name equality predicate handlers.
	 */
	_createHeaderNameEqualityPredicate( ...httpRequestHeaders )
	{
		return super._createHeaderNameEqualityPredicate( ...httpRequestHeaders );
	}

	/**
	 * Creates the default predicate to compare specified HTTP request header names with a fetched HTTP request header of the HTTP request header collection for equality by their HTTP request header names.
	 * @param {...string} httpRequestHeaderNames The HTTP request header names to compare the fetched HTTP request headers with.
	 * @returns {HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} The HTTP request header name equality predicate handlers.
	 */
	_createHeaderNameEqualityPredicateFromHeaderNames( ...httpRequestHeaderNames )
	{
		return super._createHeaderNameEqualityPredicateFromHeaderNames( httpRequestHeaderNames );
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP request header.
	 * @param {HttpHeaderCollection_HttpHeaderIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP request header collection includes a specific HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeader The HTTP request header to search for.
	 * @returns {boolean} True if the HTTP request headers is included in the HTTP request header collection, otherwise false.
	 */
	includes( httpRequestHeader )
	{
		return super.includes( httpRequestHeader );
	}

	/**
	 * Determines if the HTTP request header collection includes an HTTP request header specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request header.
	 * @returns {boolean} True if the HTTP request header is included in the HTTP request header collection, otherwise false.
	 */
	includesBy( ...predicateHandlers )
	{
		return super.includesBy( ...predicateHandlers );
	}

	/**
	 * Adds a variadic amount of HTTP request headers to the HTTP request header collection.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to add.
	 */
	add( ...httpRequestHeaders )
	{
		super.add( ...httpRequestHeaders );
	}

	/**
	 * Adds a variadic amount of HTTP request headers to the HTTP request header collection by a specific predicate handler.
	 * @param {HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandler The predicate handler to determine the HTTP request headers to add.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to add.
	 */
	addBy( predicateHandler, ...httpRequestHeaders )
	{
		super.addBy( predicateHandler, ...httpRequestHeaders );
	}

	/**
	 * Replaces all HTTP request headers in the HTTP request header collection specified by their indices.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request headers with.
	 * @param {...number} indices The indices of the HTTP request headers to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpRequestHeaderReplacement, ...indices )
	{
		super.replaceAt( httpRequestHeaderReplacement, ...indices );
	}

	/**
	 * Replaces the first occurences of a variadic amount of HTTP request headers in the HTTP request header collection with a specified HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request header with.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers which has to be replaced.
	 */
	replace( httpRequestHeaderReplacement, ...httpRequestHeaders )
	{
		super.replace( httpRequestHeaderReplacement, ...httpRequestHeaders );
	}

	/**
	 * Replaces the first occurences of HTTP request headers in the HTTP request header collection specified by a variadic amount of predicate handlers with a specified HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request header with.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request header.
	 */
	replaceBy( httpRequestHeaderReplacement, ...predicateHandlers )
	{
		super.replaceBy( httpRequestHeaderReplacement, ...predicateHandlers );
	}

	/**
	 * Replaces a variadic amount of HTTP request headers in the HTTP request header collection with a specified HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request headers with.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers which has to be replaced.
	 */
	replaceAll( httpRequestHeaderReplacement, ...httpRequestHeaders )
	{
		super.replaceAll( httpRequestHeaderReplacement, ...httpRequestHeaders );
	}

	/**
	 * Replaces all occurences of an HTTP request header in the HTTP request header collection specified by a variadic amount of predicate handlers.
	 * @param {HttpRequestHeader} httpRequestHeaderReplacement The new HTTP request header to replace the HTTP request headers with.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request headers.
	 */
	replaceAllBy( httpRequestHeaderReplacement, ...predicateHandlers )
	{
		super.replaceAllBy( httpRequestHeaderReplacement, ...predicateHandlers );
	}

	/**
	 * Adds or replaces a variadic amount of HTTP request headers to / in the list. If an HTTP request header will be added if it does not exist. Otherwise it will be replaced.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to add or replace.
	 */
	addOrReplace( ...httpRequestHeaders )
	{
		super.addOrReplace( ...httpRequestHeaders );
	}

	/**
	 * Removes HTTP request headers from the HTTP request header collection specified by a variadic amount of their indices.
	 * @param {...number} indices The index of the HTTP request header to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first occurences of a variadic amount of HTTP request headers from the HTTP request header collection.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to remove.
	 */
	remove( ...httpRequestHeaders )
	{
		super.remove( ...httpRequestHeaders );
	}

	/**
	 * Removes the first occurence of an HTTP request header from the HTTP request header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request header.
	 */
	removeBy( ...predicateHandlers )
	{
		super.removeBy( ...predicateHandlers );
	}

	/**
	 * Removes the first occurence of an HTTP request header specified by their HTTP request header names.
	 * @param {...string} httpRequestHeaderNames The names of the HTTP request headers to remove.
	 */
	removeByHeaderNames( ...httpRequestHeaderNames )
	{
		super.removeByHeaderNames( ...httpRequestHeaderNames );
	}

	/**
	 * Removes all occurences of a variadic amount of HTTP request headers from the HTTP request header collection.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to remove.
	 */
	removeAll( ...httpRequestHeaders )
	{
		super.removeAll( ...httpRequestHeaders );
	}

	/**
	 * Removes all occurences of HTTP request headers from the HTTP request header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request headers.
	 */
	removeAllBy( ...predicateHandlers )
	{
		super.removeAllBy( ...predicateHandlers );
	}

	/**
	 * Removes all occurences of HTTP request headers specified by their HTTP request header names.
	 * @param {...string} httpRequestHeaderNames The names of the HTTP request headers to remove.
	 */
	removeAllByHeaderName( ...httpRequestHeaderNames )
	{
		super.removeAllByHeaderName( ...httpRequestHeaderNames );
	}

	/**
	 * Gets the first index of an HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeader The HTTP request header to determine its first index.
	 * @returns {undefined|number} The first index of the HTTP request header, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpRequestHeader )
	{
		super.findFirstIndexOf( httpRequestHeader );
	}

	/**
	 * Gets the first index of an HTTP request header specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request header.
	 * @returns {undefined|number} The first index of the HTTP request header, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicateHandlers )
	{
		return super.findFirstIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the first index of an HTTP request header specified by its HTTP request header name.
	 * @param {string} httpRequestHeaderName The HTTP request header name of the HTTP request header.
	 * @returns {undefined|number} The first index of the HTTP request header, if found, otherwise undefined.
	 */
	findFirstIndexOfByHeaderName( httpRequestHeaderName )
	{
		return super.findFirstIndexOfByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets the last index of an HTTP request header.
	 * @param {HttpRequestHeader} httpRequestHeader The HTTP request header to determine its last index.
	 * @returns {undefined|number} The last index of the HTTP request header, if found, otherwise undefined.
	 */
	findLastIndexOf( httpRequestHeader )
	{
		return super.findLastIndexOf( httpRequestHeader );
	}

	/**
	 * Gets the last index of an HTTP request header specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request header.
	 * @returns {undefined|number} The last index of the HTTP request header, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicateHandlers )
	{
		return super.findLastIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the last index of an HTTP request header specified by its HTTP request header names.
	 * @param {string} httpRequestHeaderName The HTTP request header name of the HTTP request header.
	 * @returns {undefined|number} The last index of the HTTP request header, if found, otherwise undefined.
	 */
	findLastIndexOfByHeaderName( httpRequestHeaderName )
	{
		return super.findLastIndexOfByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets all indices of specific HTTP request headers.
	 * @param {...HttpRequestHeader} httpRequestHeaders The HTTP request headers to determine their indices.
	 * @returns {Collection<number>} The indices of the HTTP request headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpRequestHeaders )
	{
		return super.findAllIndicesOf( ...httpRequestHeaders );
	}

	/**
	 * Gets the indices of all occurences of any HTTP request header specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request headers.
	 * @returns {Collection<number>} The indices of the HTTP request headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicateHandlers )
	{
		super.findAllIndicesOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the indices of all occurences of any HTTP request header specified by a variadic amount of HTTP request header names.
	 * @param {...string} httpRequestHeaderNames The HTTP request header names to determine the HTTP request headers.
	 * @returns {Collection<number>} The indices of the HTTP request headers, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByHeaderNames( ...httpRequestHeaderNames )
	{
		super.findAllIndicesOfByHeaderNames( ...httpRequestHeaderNames );
	}

	/**
	 * Gets an HTTP request header from the HTTP request header collection specified by its index.
	 * @param {number} index The index of the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The HTTP request header, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP request header from the HTTP request header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The first HTTP request header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicateHandlers )
	{
		return super.findFirstOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the first HTTP request header from the HTTP request header collection specified by its HTTP request header name.
	 * @param {string} httpRequestHeaderName The HTTP request header name to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The first HTTP request header, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByHeaderName( httpRequestHeaderName )
	{
		return super.findFirstOrUndefinedByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets the last HTTP request header from the HTTP request header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The last HTTP request header, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicateHandlers )
	{
		return super.findLastOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the last HTTP request header from the HTTP request header collection specified by its HTTP request header name.
	 * @param {string} httpRequestHeaderName The HTTP request header name to determine the HTTP request header.
	 * @returns {undefined|HttpRequestHeader} The last HTTP request header, if found, otherwise undefined.
	 */
	findLastOrUndefinedByHeaderName( httpRequestHeaderName )
	{
		return super.findLastOrUndefinedByHeaderName( httpRequestHeaderName );
	}

	/**
	 * Gets all HTTP request headers from the HTTP request header collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP request headers.
	 * @returns {HttpRequestHeaderCollection<HttpRequestHeader>} The HTTP request headers, if found, otherwise an empty HTTP request header collection.
	 */
	findAllBy( ...predicateHandlers )
	{
		return super.findAllBy( ...predicateHandlers );
	}

	/**
	 * Gets all HTTP request headers from the HTTP request header collection specified by their HTTP request header names.
	 * @param {...string} httpRequestHeaderNames The HTTP request header names to determine the HTTP request headers.
	 * @returns {HttpRequestHeaderCollection<HttpRequestHeader>} The HTTP request headers, if found, otherwise an empty HTTP request header collection.
	 */
	findAllByHeaderNames( ...httpRequestHeaderNames )
	{
		return super.findAllByHeaderNames( ...httpRequestHeaderNames );
	}

	/**
	 * Sorts the HTTP request header collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP request header collection specified by a comparison handler.
	 * @param {HttpRequestHeaderCollection_HttpRequestHeaderComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP request headers.
	 */
	sortBy( comparisonHandler )
	{
		super.sortBy( comparisonHandler );
	}

	/**
	 * Maps all HTTP request headers of the HTTP request header collection into a new collection.
	 * @param {HttpRequestHeaderCollection_HttpRequestHeaderTransformationHandler} transformationHandler The transformation handler used to map the HTTP request header collection.
	 * @returns {Collection<any>} The collection containing the transformed HTTP request headers.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Maps all HTTP request headers of the collection into a new collection by a variadic amount of transformation handlers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderTransformationHandler} transformationHandlers The transformation handlers used to map the HTTP request header collection.
	 * @returns {Collection<any>} The collection containing the transformed HTTP request headers.
	 */
	mapBy( ...transformationHandlers )
	{
		return new HttpRequestHeaderCollection(
			...super.mapBy( ...transformationHandlers )
		);
	}

	/**
	 * Concatenates the HTTP request headers of the collection by a specific delimiter string.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP request headers.
	 * @returns {string} The concatenated string.
	 */
	join( delimiter = '' )
	{
		return super.join( delimiter );
	}

	/**
	 * Concatenates the HTTP request headers of the HTTP request header collection by a specific delimiter string and by a variadic amount of transformation handlers.
	 * @param {string} delimiter The delimiter used to concatenate the mapped HTTP request headers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderTransformationHandler} transformationHandlers The transformation handlers used to transform the HTTP request headers.
	 * @returns {string} The concatenated string.
	 */
	joinMapped( delimiter, ...transformationHandlers )
	{
		return super.joinMapped( delimiter, ...transformationHandlers );
	}

	/**
	 * Concatenates the HTTP request headers of the HTTP request header collection by a specific delimiter string and by a variadic amount of predicate handlers.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP request headers.
	 * @param {...HttpRequestHeaderCollection_HttpRequestHeaderPredicateHandler} predicateHandlers The predicate handlers used to determine the HTTP request headers.
	 * @returns {string} The concatenated string.
	 */
	joinBy( delimiter, ...predicateHandlers )
	{
		return super.joinBy( delimiter, ...predicateHandlers );
	}

	/**
	 * Gets the array representation of the HTTP request header collection.
	 * @returns {Array<HttpRequestHeader>} The array representation of the HTTP request header collection.
	 */
	toArray()
	{
		return super.toArray();
	}
}
