'use strict';

import { HttpArgumentCollection } from './http-argument-collection.js';

/**
 * Represents the handler of any HTTP GET argument collection HTTP GET argument iteration.
 * @callback HttpGetArgumentCollection_HttpGetArgumentIterationHandler
 * @param {HttpGetArgument} httpGetArgument The currently iterated HTTP GET argument.
 * @param {number} httpGetArgumentIndex The index of the currently iterated HTTP GET argument.
 */

/**
 * Represents the handler of any HTTP GET argument collection HTTP GET argument comparison.
 * @callback HttpGetArgumentCollection_HttpGetArgumentComparisonHandler
 * @param {HttpGetArgument} httpGetArgument_1 The first HTTP GET argument to compare.
 * @param {HttpGetArgument} httpGetArgument_2 The second HTTP GET argument to compare.
 * @returns {number} -1 if the first HTTP GET argument is lower than the second HTTP GET argument, 0 if the first HTTP GET argument is equal to the second HTTP GET argument and 1 if the first HTTP GET argument is greater than the second HTTP GET argument.
 */

/**
 * Represents the handler of any HTTP GET argument collection HTTP GET argument transformation.
 * @callback HttpGetArgumentCollection_HttpGetArgumentTransformationHandler
 * @param {HttpGetArgument} httpGetArgument The currently iterated HTTP GET argument.
 * @param {number} httpGetArgumentIndex The index of the currently iterated HTTP GET argument.
 * @returns {any} The transformed HTTP GET argument.
 */

/**
 * Represents the handler of any HTTP GET argument collection HTTP GET argument determination.
 * @callback HttpGetArgumentCollection_HttpGetArgumentPredicateHandler
 * @param {HttpGetArgument} httpGetArgument The currently iterated HTTP GET argument.
 * @param {number} httpGetArgumentIndex The index of the currently iterated HTTP GET argument.
 * @returns {boolean} True if the iterated HTTP GET argument matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP GET arguments.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpGetArgumentCollection extends HttpArgumentCollection
{
	/**
	 * Constructor method.
	 * @param {...HttpGetArgument} httpGetArguments The initial HTTP GET arguments of the collection.
	 */
	constructor( ...httpGetArguments )
	{
		super( ...httpGetArguments );
	}

	/**
	 * Gets the number of HTTP GET arguments in the collection.
	 * @returns {number} The number of HTTP GET arguments in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Gets all HTTP GET arguments of the collection as a full URL encoded query string.
	 * @returns {string} The HTTP GET arguments of the collection as a full URL encoded query string.
	 */
	get fullHttpGetArgumentsString()
	{
		return super.fullHttpGetArgumentsString;
	}

	/**
	 * Creates a predicate that checks whether an HTTP GET argument's name matches the name of any of the specified HTTP GET arguments.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments to match by name.
	 * @returns {HttpArgumentCollection_HttpArgumentPredicateHandler} The HTTP GET argument name equality predicate.
	 */
	_createArgumentNameEqualityPredicate( ...httpGetArguments )
	{
		return super._createArgumentNameEqualityPredicate( ...httpGetArguments );
	}

	/**
	 * Creates a predicate that checks whether an HTTP GET argument's name matches any of the specified HTTP GET argument names.
	 * @param {...string} httpGetArgumentNames The HTTP GET argument names to match.
	 * @returns {HttpArgumentCollection_HttpArgumentPredicateHandler} The HTTP GET argument name equality predicate.
	 */
	_createArgumentNameEqualityPredicateFromArgumentNames( ...httpGetArgumentNames )
	{
		return super._createArgumentNameEqualityPredicateFromArgumentNames( ...httpGetArgumentNames );
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP GET argument.
	 * @param {HttpArgumentCollection_HttpArgumentIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP GET argument collection includes a specific HTTP GET argument.
	 * @param {HttpGetArgument} httpGetArgument The HTTP GET argument to search for.
	 * @returns {boolean} True if the HTTP GET argument is included in the HTTP GET argument collection, otherwise false.
	 */
	includes( httpGetArgument )
	{
		return super.includes( httpGetArgument );
	}

	/**
	 * Determines if the HTTP GET argument collection includes an HTTP GET argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET argument.
	 * @returns {boolean} True if the HTTP GET argument is included in the HTTP GET argument collection, otherwise false.
	 */
	includesBy( ...predicateHandlers )
	{
		return super.includesBy( ...predicateHandlers );
	}

	/**
	 * Adds a variadic amount of HTTP GET arguments to the HTTP GET argument collection.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments to add.
	 */
	add( ...httpGetArguments )
	{
		super.add( ...httpGetArguments );
	}

	/**
	 * Adds a variadic amount of HTTP GET arguments to the HTTP GET argument collection by a specific predicate handler.
	 * @param {HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandler The predicate handler to determine the HTTP GET arguments to add.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments to add.
	 */
	addBy( predicateHandler, ...httpGetArguments )
	{
		super.addBy( predicateHandler, ...httpGetArguments );
	}

	/**
	 * Replaces all HTTP GET arguments in the HTTP GET argument collection specified by their indices.
	 * @param {HttpGetArgument} httpGetArgumentReplacement The new HTTP GET argument to replace the HTTP GET arguments with.
	 * @param {...number} indices The indices of the HTTP GET arguments to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpGetArgumentReplacement, ...indices )
	{
		super.replaceAt( httpGetArgumentReplacement, ...indices );
	}

	/**
	 * Replaces the first occurrences of a variadic amount of HTTP GET arguments in the HTTP GET argument collection with a specified HTTP GET argument.
	 * @param {HttpGetArgument} httpGetArgumentReplacement The new HTTP GET argument to replace the HTTP GET argument with.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments that have to be replaced.
	 */
	replace( httpGetArgumentReplacement, ...httpGetArguments )
	{
		super.replace( httpGetArgumentReplacement, ...httpGetArguments );
	}

	/**
	 * Replaces the first occurrences of HTTP GET arguments in the HTTP GET argument collection specified by a variadic amount of predicate handlers with a specified HTTP GET argument.
	 * @param {HttpGetArgument} httpGetArgumentReplacement The new HTTP GET argument to replace the HTTP GET argument with.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET argument.
	 */
	replaceBy( httpGetArgumentReplacement, ...predicateHandlers )
	{
		super.replaceBy( httpGetArgumentReplacement, ...predicateHandlers );
	}

	/**
	 * Replaces a variadic amount of HTTP GET arguments in the HTTP GET argument collection with a specified HTTP GET argument.
	 * @param {HttpGetArgument} httpGetArgumentReplacement The new HTTP GET argument to replace the HTTP GET arguments with.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments that have to be replaced.
	 */
	replaceAll( httpGetArgumentReplacement, ...httpGetArguments )
	{
		super.replaceAll( httpGetArgumentReplacement, ...httpGetArguments );
	}

	/**
	 * Replaces all occurrences of an HTTP GET argument in the HTTP GET argument collection specified by a variadic amount of predicate handlers.
	 * @param {HttpGetArgument} httpGetArgumentReplacement The new HTTP GET argument to replace the HTTP GET arguments with.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET arguments.
	 */
	replaceAllBy( httpGetArgumentReplacement, ...predicateHandlers )
	{
		super.replaceAllBy( httpGetArgumentReplacement, ...predicateHandlers );
	}

	/**
	 * Adds HTTP GET arguments to the collection or replaces existing arguments with matching names.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments to add or replace.
	 */
	addOrReplace( ...httpGetArguments )
	{
		super.addOrReplace( ...httpGetArguments );
	}

	/**
	 * Removes HTTP GET arguments from the HTTP GET argument collection specified by a variadic amount of their indices.
	 * @param {...number} indices The indices of the HTTP GET arguments to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first HTTP GET argument whose name matches any of the specified HTTP GET arguments.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments to remove.
	 */
	remove( ...httpGetArguments )
	{
		super.remove( ...httpGetArguments );
	}

	/**
	 * Removes the first occurrence of an HTTP GET argument from the HTTP GET argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET argument.
	 */
	removeBy( ...predicateHandlers )
	{
		super.removeBy( ...predicateHandlers );
	}

	/**
	 * Removes the first HTTP GET argument whose name matches any of the specified names.
	 * @param {...string} httpGetArgumentNames The names of the HTTP GET arguments to remove.
	 */
	removeByArgumentNames( ...httpGetArgumentNames )
	{
		super.removeByArgumentNames( ...httpGetArgumentNames );
	}

	/**
	 * Removes all occurrences of a variadic amount of HTTP GET arguments from the HTTP GET argument collection.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments to remove.
	 */
	removeAll( ...httpGetArguments )
	{
		super.removeAll( ...httpGetArguments );
	}

	/**
	 * Removes all occurrences of HTTP GET arguments from the HTTP GET argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET arguments.
	 */
	removeAllBy( ...predicateHandlers )
	{
		super.removeAllBy( ...predicateHandlers );
	}

	/**
	 * Removes all HTTP GET arguments matching any of the specified names.
	 * @param {...string} httpGetArgumentNames The names of the HTTP GET arguments to remove.
	 */
	removeAllByArgumentName( ...httpGetArgumentNames )
	{
		super.removeAllByArgumentName( ...httpGetArgumentNames );
	}

	/**
	 * Gets the first index of an HTTP GET argument.
	 * @param {HttpGetArgument} httpGetArgument The HTTP GET argument to determine its first index.
	 * @returns {undefined|number} The first index of the HTTP GET argument, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpGetArgument )
	{
		super.findFirstIndexOf( httpGetArgument );
	}

	/**
	 * Gets the first index of an HTTP GET argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET argument.
	 * @returns {undefined|number} The first index of the HTTP GET argument, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicateHandlers )
	{
		return super.findFirstIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the first index of an HTTP GET argument specified by its HTTP GET argument name.
	 * @param {string} httpGetArgumentName The HTTP GET argument name of the HTTP GET argument.
	 * @returns {undefined|number} The first index of the HTTP GET argument, if found, otherwise undefined.
	 */
	findFirstIndexOfByArgumentName( httpGetArgumentName )
	{
		return super.findFirstIndexOfByArgumentName( httpGetArgumentName );
	}

	/**
	 * Gets the last index of an HTTP GET argument.
	 * @param {HttpGetArgument} httpGetArgument The HTTP GET argument to determine its last index.
	 * @returns {undefined|number} The last index of the HTTP GET argument, if found, otherwise undefined.
	 */
	findLastIndexOf( httpGetArgument )
	{
		return super.findLastIndexOf( httpGetArgument );
	}

	/**
	 * Gets the last index of an HTTP GET argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET argument.
	 * @returns {undefined|number} The last index of the HTTP GET argument, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicateHandlers )
	{
		return super.findLastIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the last index of an HTTP GET argument specified by its HTTP GET argument name.
	 * @param {string} httpGetArgumentName The HTTP GET argument name of the HTTP GET argument.
	 * @returns {undefined|number} The last index of the HTTP GET argument, if found, otherwise undefined.
	 */
	findLastIndexOfByArgumentName( httpGetArgumentName )
	{
		return super.findLastIndexOfByArgumentName( httpGetArgumentName );
	}

	/**
	 * Gets all indices of specific HTTP GET arguments.
	 * @param {...HttpGetArgument} httpGetArguments The HTTP GET arguments to determine their indices.
	 * @returns {Collection< number >} The indices of the HTTP GET arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpGetArguments )
	{
		return super.findAllIndicesOf( ...httpGetArguments );
	}

	/**
	 * Gets the indices of all occurrences of any HTTP GET argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET arguments.
	 * @returns {Collection< number >} The indices of the HTTP GET arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicateHandlers )
	{
		super.findAllIndicesOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the indices of all occurrences of any HTTP GET argument specified by a variadic amount of HTTP GET argument names.
	 * @param {...string} httpGetArgumentNames The HTTP GET argument names to determine the HTTP GET arguments.
	 * @returns {Collection< number >} The indices of the HTTP GET arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByArgumentNames( ...httpGetArgumentNames )
	{
		super.findAllIndicesOfByArgumentNames( ...httpGetArgumentNames );
	}

	/**
	 * Gets an HTTP GET argument from the HTTP GET argument collection specified by its index.
	 * @param {number} index The index of the HTTP GET argument.
	 * @returns {undefined|HttpGetArgument} The HTTP GET argument, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP GET argument from the HTTP GET argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET argument.
	 * @returns {undefined|HttpGetArgument} The first HTTP GET argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicateHandlers )
	{
		return super.findFirstOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the first HTTP GET argument from the HTTP GET argument collection specified by its HTTP GET argument name.
	 * @param {string} httpGetArgumentName The HTTP GET argument name to determine the HTTP GET argument.
	 * @returns {undefined|HttpGetArgument} The first HTTP GET argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByArgumentName( httpGetArgumentName )
	{
		return super.findFirstOrUndefinedByArgumentName( httpGetArgumentName );
	}

	/**
	 * Gets the last HTTP GET argument from the HTTP GET argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET argument.
	 * @returns {undefined|HttpGetArgument} The last HTTP GET argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicateHandlers )
	{
		return super.findLastOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the last HTTP GET argument from the HTTP GET argument collection specified by its HTTP GET argument name.
	 * @param {string} httpGetArgumentName The HTTP GET argument name to determine the HTTP GET argument.
	 * @returns {undefined|HttpGetArgument} The last HTTP GET argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedByArgumentName( httpGetArgumentName )
	{
		return super.findLastOrUndefinedByArgumentName( httpGetArgumentName );
	}

	/**
	 * Gets all HTTP GET arguments from the HTTP GET argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP GET arguments.
	 * @returns {HttpGetArgumentCollection< HttpGetArgument >} The HTTP GET arguments, if found, otherwise an empty HTTP GET argument collection.
	 */
	findAllBy( ...predicateHandlers )
	{
		return new HttpGetArgumentCollection(
			...super.findAllBy( ...predicateHandlers )
		);
	}

	/**
	 * Gets all HTTP GET arguments from the HTTP GET argument collection specified by their HTTP GET argument names.
	 * @param {...string} httpGetArgumentNames The HTTP GET argument names to determine the HTTP GET arguments.
	 * @returns {HttpGetArgumentCollection< HttpGetArgument >} The HTTP GET arguments, if found, otherwise an empty HTTP GET argument collection.
	 */
	findAllByArgumentNames( ...httpGetArgumentNames )
	{
		return super.findAllByArgumentNames( ...httpGetArgumentNames );
	}

	/**
	 * Sorts the HTTP GET argument collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP GET argument collection specified by a comparison handler.
	 * @param {HttpGetArgumentCollection_HttpGetArgumentComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP GET arguments.
	 */
	sortBy( comparisonHandler )
	{
		super.sortBy( comparisonHandler );
	}

	/**
	 * Maps all HTTP GET arguments of the HTTP GET argument collection into a new collection.
	 * @param {HttpGetArgumentCollection_HttpGetArgumentTransformationHandler} transformationHandler The transformation handler used to map the HTTP GET argument collection.
	 * @returns {Collection< any >} The collection containing the transformed HTTP GET arguments.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Maps all HTTP GET arguments of the collection into a new collection by a variadic amount of transformation handlers.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentTransformationHandler} transformationHandlers The transformation handlers used to map the HTTP GET argument collection.
	 * @returns {Collection< any >} The collection containing the transformed HTTP GET arguments.
	 */
	mapBy( ...transformationHandlers )
	{
		return new HttpGetArgumentCollection(
			...super.mapBy( ...transformationHandlers )
		);
	}

	/**
	 * Concatenates the HTTP GET arguments of the collection by a specific delimiter string.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP GET arguments.
	 * @returns {string} The concatenated string.
	 */
	join( delimiter = '' )
	{
		return super.join( delimiter );
	}

	/**
	 * Concatenates the HTTP GET arguments of the HTTP GET arguments collection by a specific delimiter string and by a variadic amount of transformation handlers.
	 * @param {string} delimiter The delimiter used to concatenate the mapped HTTP GET arguments.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentTransformationHandler} transformationHandlers The transformation handlers used to transform the HTTP GET arguments.
	 * @returns {string} The concatenated string.
	 */
	joinMapped( delimiter, ...transformationHandlers )
	{
		return super.joinMapped( delimiter, ...transformationHandlers );
	}

	/**
	 * Concatenates the HTTP GET arguments of the HTTP GET argument collection by a specific delimiter string and by a variadic amount of predicate handlers.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP GET arguments.
	 * @param {...HttpGetArgumentCollection_HttpGetArgumentPredicateHandler} predicateHandlers The predicate handlers used to determine the HTTP GET arguments.
	 * @returns {string} The concatenated string.
	 */
	joinBy( delimiter, ...predicateHandlers )
	{
		return super.joinBy( delimiter, ...predicateHandlers );
	}

	/**
	 * Gets the array representation of the HTTP GET argument collection.
	 * @returns {Array< HttpGetArgument >} The array representation of the HTTP GET argument collection.
	 */
	toArray()
	{
		return super.toArray();
	}
}
