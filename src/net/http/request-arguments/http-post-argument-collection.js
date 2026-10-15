'use strict';

import { HttpArgumentCollection } from './http-argument-collection.js';

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument iteration.
 * @callback HttpPostArgumentCollection_HttpPostArgumentIterationHandler
 * @param {HttpPostArgument} httpPostArgument The currently iterated HTTP POST argument.
 * @param {number} httpPostArgumentIndex The index of the currently iterated HTTP POST argument.
 */

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument comparison.
 * @callback HttpPostArgumentCollection_HttpPostArgumentComparisonHandler
 * @param {HttpPostArgument} httpPostArgument_1 The first HTTP POST argument to compare.
 * @param {HttpPostArgument} httpPostArgument_2 The second HTTP POST argument to compare.
 * @returns {number} -1 if the first HTTP POST argument is lower than the second HTTP POST argument, 0 if the first HTTP POST argument is equal to the second HTTP POST argument and 1 if the first HTTP POST argument is greater than the second HTTP POST argument.
 */

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument transformation.
 * @callback HttpPostArgumentCollection_HttpPostArgumentTransformationHandler
 * @param {HttpPostArgument} httpPostArgument The currently iterated HTTP POST argument.
 * @param {number} httpPostArgumentIndex The index of the currently iterated HTTP POST argument.
 * @returns {any} The transformed HTTP POST argument.
 */

/**
 * Represents the handler of any HTTP POST argument collection HTTP POST argument determination.
 * @callback HttpPostArgumentCollection_HttpPostArgumentPredicateHandler
 * @param {HttpPostArgument} httpPostArgument The currently iterated HTTP POST argument.
 * @param {number} httpPostArgumentIndex The index of the currently iterated HTTP POST argument.
 * @returns {boolean} True if the iterated HTTP POST argument matches the predicate, otherwise false.
 */

/**
 * Represents a collection of HTTP POST arguments.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostArgumentCollection extends HttpArgumentCollection
{
	/**
	 * Constructor method.
	 * @param {...HttpPostArgument} httpPostArguments The initial HTTP POST arguments of the collection.
	 */
	constructor( ...httpPostArguments )
	{
		super( ...httpPostArguments );
	}

	/**
	 * Gets the number of HTTP POST arguments in the collection.
	 * @returns {number} The number of HTTP POST arguments in the collection.
	 */
	get length()
	{
		return super.length;
	}

	/**
	 * Gets all HTTP POST arguments of the collection as a full URL encoded query string.
	 * @returns {string} The HTTP POST arguments of the collection as a full URL encoded query string.
	 */
	get fullHttpPostArgumentsString()
	{
		return super.fullHttpPostArgumentsString;
	}

	/**
	 * Invokes a specific iteration handler on every collection's HTTP POST argument.
	 * @param {HttpArgumentCollection_HttpArgumentIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		super.forEach( iterationHandler );
	}

	/**
	 * Determines if the HTTP POST argument collection includes a specific HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgument The HTTP POST argument to search for.
	 * @returns {boolean} True if the HTTP POST argument is included in the HTTP POST argument collection, otherwise false.
	 */
	includes( httpPostArgument )
	{
		return super.includes( httpPostArgument );
	}

	/**
	 * Determines if the HTTP POST argument collection includes an HTTP POST argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST argument.
	 * @returns {boolean} True if the HTTP POST argument is included in the HTTP POST argument collection, otherwise false.
	 */
	includesBy( ...predicateHandlers )
	{
		return super.includesBy( ...predicateHandlers );
	}

	/**
	 * Adds a variadic amount of HTTP POST arguments to the HTTP POST argument collection.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to add.
	 */
	add( ...httpPostArguments )
	{
		super.add( ...httpPostArguments );
	}

	/**
	 * Adds a variadic amount of HTTP POST arguments to the HTTP POST argument collection by a specific predicate handler.
	 * @param {HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandler The predicate handler to determine the HTTP POST arguments to add.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to add.
	 */
	addBy( predicateHandler, ...httpPostArguments )
	{
		super.addBy( predicateHandler, ...httpPostArguments );
	}

	/**
	 * Replaces all HTTP POST arguments in the HTTP POST argument collection specified by their indices.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST arguments with.
	 * @param {...number} indices The indices of the HTTP POST arguments to replace.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	replaceAt( httpPostArgumentReplacement, ...indices )
	{
		super.replaceAt( httpPostArgumentReplacement, ...indices );
	}

	/**
	 * Replaces the first occurrences of a variadic amount of HTTP POST arguments in the HTTP POST argument collection with a specified HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST argument with.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments that have to be replaced.
	 */
	replace( httpPostArgumentReplacement, ...httpPostArguments )
	{
		super.replace( httpPostArgumentReplacement, ...httpPostArguments );
	}

	/**
	 * Replaces the first occurrences of HTTP POST arguments in the HTTP POST argument collection specified by a variadic amount of predicate handlers with a specified HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST argument with.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST argument.
	 */
	replaceBy( httpPostArgumentReplacement, ...predicateHandlers )
	{
		super.replaceBy( httpPostArgumentReplacement, ...predicateHandlers );
	}

	/**
	 * Replaces a variadic amount of HTTP POST arguments in the HTTP POST argument collection with a specified HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST arguments with.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments that have to be replaced.
	 */
	replaceAll( httpPostArgumentReplacement, ...httpPostArguments )
	{
		super.replaceAll( httpPostArgumentReplacement, ...httpPostArguments );
	}

	/**
	 * Replaces all occurrences of an HTTP POST argument in the HTTP POST argument collection specified by a variadic amount of predicate handlers.
	 * @param {HttpPostArgument} httpPostArgumentReplacement The new HTTP POST argument to replace the HTTP POST arguments with.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST arguments.
	 */
	replaceAllBy( httpPostArgumentReplacement, ...predicateHandlers )
	{
		super.replaceAllBy( httpPostArgumentReplacement, ...predicateHandlers );
	}

	/**
	 * Adds HTTP POST arguments to the collection or replaces existing arguments with matching names.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to add or replace.
	 */
	addOrReplace( ...httpPostArguments )
	{
		super.addOrReplace( ...httpPostArguments );
	}

	/**
	 * Removes HTTP POST arguments from the HTTP POST argument collection specified by a variadic amount of their indices.
	 * @param {...number} indices The indices of the HTTP POST arguments to remove.
	 * @throws {InvalidIndexException} An index is invalid.
	 */
	removeAt( ...indices )
	{
		super.removeAt( ...indices );
	}

	/**
	 * Removes the first HTTP POST argument whose name matches any of the specified HTTP POST arguments.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to remove.
	 */
	remove( ...httpPostArguments )
	{
		super.remove( ...httpPostArguments );
	}

	/**
	 * Removes the first occurrence of an HTTP POST argument from the HTTP POST argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST argument.
	 */
	removeBy( ...predicateHandlers )
	{
		super.removeBy( ...predicateHandlers );
	}

	/**
	 * Removes the first HTTP POST argument whose name matches any of the specified names.
	 * @param {...string} httpPostArgumentNames The names of the HTTP POST arguments to remove.
	 */
	removeByArgumentNames( ...httpPostArgumentNames )
	{
		super.removeByArgumentNames( ...httpPostArgumentNames );
	}

	/**
	 * Removes all occurrences of a variadic amount of HTTP POST arguments from the HTTP POST argument collection.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to remove.
	 */
	removeAll( ...httpPostArguments )
	{
		super.removeAll( ...httpPostArguments );
	}

	/**
	 * Removes all occurrences of HTTP POST arguments from the HTTP POST argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST arguments.
	 */
	removeAllBy( ...predicateHandlers )
	{
		super.removeAllBy( ...predicateHandlers );
	}

	/**
	 * Removes all HTTP POST arguments matching any of the specified names.
	 * @param {...string} httpPostArgumentNames The names of the HTTP POST arguments to remove.
	 */
	removeAllByArgumentName( ...httpPostArgumentNames )
	{
		super.removeAllByArgumentName( ...httpPostArgumentNames );
	}

	/**
	 * Gets the first index of an HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgument The HTTP POST argument to determine its first index.
	 * @returns {undefined|number} The first index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstIndexOf( httpPostArgument )
	{
		super.findFirstIndexOf( httpPostArgument );
	}

	/**
	 * Gets the first index of an HTTP POST argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST argument.
	 * @returns {undefined|number} The first index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstIndexOfBy( ...predicateHandlers )
	{
		return super.findFirstIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the first index of an HTTP POST argument specified by its HTTP POST argument name.
	 * @param {string} httpPostArgumentName The HTTP POST argument name of the HTTP POST argument.
	 * @returns {undefined|number} The first index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstIndexOfByArgumentName( httpPostArgumentName )
	{
		return super.findFirstIndexOfByArgumentName( httpPostArgumentName );
	}

	/**
	 * Gets the last index of an HTTP POST argument.
	 * @param {HttpPostArgument} httpPostArgument The HTTP POST argument to determine its last index.
	 * @returns {undefined|number} The last index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findLastIndexOf( httpPostArgument )
	{
		return super.findLastIndexOf( httpPostArgument );
	}

	/**
	 * Gets the last index of an HTTP POST argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST argument.
	 * @returns {undefined|number} The last index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findLastIndexOfBy( ...predicateHandlers )
	{
		return super.findLastIndexOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the last index of an HTTP POST argument specified by its HTTP POST argument name.
	 * @param {string} httpPostArgumentName The HTTP POST argument name of the HTTP POST argument.
	 * @returns {undefined|number} The last index of the HTTP POST argument, if found, otherwise undefined.
	 */
	findLastIndexOfByArgumentName( httpPostArgumentName )
	{
		return super.findLastIndexOfByArgumentName( httpPostArgumentName );
	}

	/**
	 * Gets all indices of specific HTTP POST arguments.
	 * @param {...HttpPostArgument} httpPostArguments The HTTP POST arguments to determine their indices.
	 * @returns {Collection< number >} The indices of the HTTP POST arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOf( ...httpPostArguments )
	{
		return super.findAllIndicesOf( ...httpPostArguments );
	}

	/**
	 * Gets the indices of all occurrences of any HTTP POST argument specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST arguments.
	 * @returns {Collection< number >} The indices of the HTTP POST arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfBy( ...predicateHandlers )
	{
		super.findAllIndicesOfBy( ...predicateHandlers );
	}

	/**
	 * Gets the indices of all occurrences of any HTTP POST argument specified by a variadic amount of HTTP POST argument names.
	 * @param {...string} httpPostArgumentNames The HTTP POST argument names to determine the HTTP POST arguments.
	 * @returns {Collection< number >} The indices of the HTTP POST arguments, if found, otherwise an empty collection.
	 */
	findAllIndicesOfByArgumentNames( ...httpPostArgumentNames )
	{
		super.findAllIndicesOfByArgumentNames( ...httpPostArgumentNames );
	}

	/**
	 * Gets an HTTP POST argument from the HTTP POST argument collection specified by its index.
	 * @param {number} index The index of the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The HTTP POST argument, if found.
	 */
	findAt( index )
	{
		return super.findAt( index );
	}

	/**
	 * Gets the first HTTP POST argument from the HTTP POST argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The first HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedBy( ...predicateHandlers )
	{
		return super.findFirstOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the first HTTP POST argument from the HTTP POST argument collection specified by its HTTP POST argument name.
	 * @param {string} httpPostArgumentName The HTTP POST argument name to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The first HTTP POST argument, if found, otherwise undefined.
	 */
	findFirstOrUndefinedByArgumentName( httpPostArgumentName )
	{
		return super.findFirstOrUndefinedByArgumentName( httpPostArgumentName );
	}

	/**
	 * Gets the last HTTP POST argument from the HTTP POST argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The last HTTP POST argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedBy( ...predicateHandlers )
	{
		return super.findLastOrUndefinedBy( ...predicateHandlers );
	}

	/**
	 * Gets the last HTTP POST argument from the HTTP POST argument collection specified by its HTTP POST argument name.
	 * @param {string} httpPostArgumentName The HTTP POST argument name to determine the HTTP POST argument.
	 * @returns {undefined|HttpPostArgument} The last HTTP POST argument, if found, otherwise undefined.
	 */
	findLastOrUndefinedByArgumentName( httpPostArgumentName )
	{
		return super.findLastOrUndefinedByArgumentName( httpPostArgumentName );
	}

	/**
	 * Gets all HTTP POST arguments from the HTTP POST argument collection specified by a variadic amount of predicate handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers to determine the HTTP POST arguments.
	 * @returns {HttpPostArgumentCollection< HttpPostArgument >} The HTTP POST arguments, if found, otherwise an empty HTTP POST argument collection.
	 */
	findAllBy( ...predicateHandlers )
	{
		return new HttpPostArgumentCollection(
			...super.findAllBy( ...predicateHandlers )
		);
	}

	/**
	 * Gets all HTTP POST arguments from the HTTP POST argument collection specified by their HTTP POST argument names.
	 * @param {...string} httpPostArgumentNames The HTTP POST argument names to determine the HTTP POST arguments.
	 * @returns {HttpPostArgumentCollection< HttpPostArgument >} The HTTP POST arguments, if found, otherwise an empty HTTP POST argument collection.
	 */
	findAllByArgumentNames( ...httpPostArgumentNames )
	{
		return super.findAllByArgumentNames( ...httpPostArgumentNames );
	}

	/**
	 * Sorts the HTTP POST argument collection.
	 */
	sort()
	{
		super.sort();
	}

	/**
	 * Sorts the HTTP POST argument collection specified by a comparison handler.
	 * @param {HttpPostArgumentCollection_HttpPostArgumentComparisonHandler} comparisonHandler The comparison handler used to compare the HTTP POST arguments.
	 */
	sortBy( comparisonHandler )
	{
		super.sortBy( comparisonHandler );
	}

	/**
	 * Maps all HTTP POST arguments of the HTTP POST argument collection into a new collection.
	 * @param {HttpPostArgumentCollection_HttpPostArgumentTransformationHandler} transformationHandler The transformation handler used to map the HTTP POST argument collection.
	 * @returns {Collection< any >} The collection containing the transformed HTTP POST arguments.
	 */
	map( transformationHandler )
	{
		return super.map( transformationHandler );
	}

	/**
	 * Maps all HTTP POST arguments of the collection into a new collection by a variadic amount of transformation handlers.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentTransformationHandler} transformationHandlers The transformation handlers used to map the HTTP POST argument collection.
	 * @returns {Collection< any >} The collection containing the transformed HTTP POST arguments.
	 */
	mapBy( ...transformationHandlers )
	{
		return new HttpPostArgumentCollection(
			...super.mapBy( ...transformationHandlers )
		);
	}

	/**
	 * Concatenates the HTTP POST arguments of the collection by a specific delimiter string.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP POST arguments.
	 * @returns {string} The concatenated string.
	 */
	join( delimiter = '' )
	{
		return super.join( delimiter );
	}

	/**
	 * Concatenates the HTTP POST arguments of the HTTP POST arguments collection by a specific delimiter string and by a variadic amount of transformation handlers.
	 * @param {string} delimiter The delimiter used to concatenate the mapped HTTP POST arguments.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentTransformationHandler} transformationHandlers The transformation handlers used to transform the HTTP POST arguments.
	 * @returns {string} The concatenated string.
	 */
	joinMapped( delimiter, ...transformationHandlers )
	{
		return super.joinMapped( delimiter, ...transformationHandlers );
	}

	/**
	 * Concatenates the HTTP POST arguments of the HTTP POST argument collection by a specific delimiter string and by a variadic amount of predicate handlers.
	 * @param {string} delimiter The delimiter used to concatenate the HTTP POST arguments.
	 * @param {...HttpPostArgumentCollection_HttpPostArgumentPredicateHandler} predicateHandlers The predicate handlers used to determine the HTTP POST arguments.
	 * @returns {string} The concatenated string.
	 */
	joinBy( delimiter, ...predicateHandlers )
	{
		return super.joinBy( delimiter, ...predicateHandlers );
	}

	/**
	 * Gets the array representation of the HTTP POST argument collection.
	 * @returns {Array< HttpPostArgument >} The array representation of the HTTP POST argument collection.
	 */
	toArray()
	{
		return super.toArray();
	}
}
