'use strict';

/**
 * Represents prototype extensions and types of the class `Array`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import type { ArrayIndexedTransformationHandler } from './array-indexed-transformation-handler.js';
import type { ArrayResolvedIndexedTransformationHandlerChain } from './array-resolved-indexed-transformation-handler-chain.js';
import type { ArrayResolvedTransformationHandlerChain } from './array-resolved-transformation-handler-chain.js';
import type { ArrayTransformationHandler } from './array-transformation-handler.js';
import type { ArrayTransformationResult } from './array-transformation-result.js';
import { InvalidIndexException } from './invalid-index-exception.js';

declare global
{
	/**
	 * Represents extensions of a generic array.
	 */
	interface Array<T>
	{
		/**
		 * Determines if the array is empty.
		 * @returns True if the array is empty, otherwise false.
		 */
		isEmpty(): boolean;

		/**
		 * Determines if the array includes an element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns True if the element is included in the array, otherwise false.
		 */
		includesBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): boolean;

		/**
		 * Adds a variadic amount of elements to the array.
		 * @param elements The elements to add.
		 */
		add( ...elements: T[] ): void;

		/**
		 * Adds a variadic amount of elements to the array by a specific predicate handler.
		 * @param predicateHandler The predicate handler to determine the elements to add.
		 * @param elements The elements to add.
		 */
		addBy( predicateHandler: ( element: T, elementIndex: number ) => boolean, ...elements: T[] ): void;

		/**
		 * Replaces all elements in the array specified by their indices.
		 * @param elementReplacement The new element to replace the elements with.
		 * @param indices The indices of the elements to replace.
		 * @throws {InvalidIndexException} An index is invalid.
		 */
		replaceAt( elementReplacement: T, ...indices: number[] ): void;

		/**
		 * Replaces the first occurrences of a variadic amount of elements in the array with a specified element.
		 * @param elementReplacement The new element to replace the element with.
		 * @param elements The elements that have to be replaced.
		 */
		replace( elementReplacement: T, ...elements: T[] ): void;

		/**
		 * Replaces the first occurrences of elements in the array specified by a variadic amount of predicate handlers with a specified element.
		 * @param elementReplacement The new element to replace the element with.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 */
		replaceBy( elementReplacement: T, ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): void;

		/**
		 * Replaces a variadic amount of elements in the array with a specified element.
		 * @param elementReplacement The new element to replace the elements with.
		 * @param elements The elements that have to be replaced.
		 */
		replaceAll( elementReplacement: T, ...elements: T[] ): void;

		/**
		 * Replaces all occurrences of an element in the array specified by a variadic amount of predicate handlers.
		 * @param elementReplacement The new element to replace the elements with.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 */
		replaceAllBy( elementReplacement: T, ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): void;

		/**
		 * Removes elements from the array specified by a variadic amount of their indices.
		 * @param indices The indices of the elements to remove.
		 * @throws {InvalidIndexException} An index is invalid.
		 */
		removeAt( ...indices: number[] ): void;

		/**
		 * Removes the first occurrences of a variadic amount of elements from the array.
		 * @param elements The elements to remove.
		 */
		remove( ...elements: T[] ): void;

		/**
		 * Removes the first occurrence of an element from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 */
		removeBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): void;

		/**
		 * Removes all occurrences of a variadic amount of elements from the array.
		 * @param elements The elements to remove.
		 */
		removeAll( ...elements: T[] ): void;

		/**
		 * Removes all occurrences of elements from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 */
		removeAllBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): void;

		/**
		 * Gets the first index of an element.
		 * @param element The element to determine its first index.
		 * @returns The first index of the element, if found, otherwise undefined.
		 */
		findFirstIndexOf( element: T ): undefined | number;

		/**
		 * Gets the first index of an element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The first index of the element, if found, otherwise undefined.
		 */
		findFirstIndexOfBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): undefined | number;

		/**
		 * Gets the last index of an element.
		 * @param element The element to determine its last index.
		 * @returns The last index of the element, if found, otherwise undefined.
		 */
		findLastIndexOf( element: T ): undefined | number;

		/**
		 * Gets the last index of an element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The last index of the element, if found, otherwise undefined.
		 */
		findLastIndexOfBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): undefined | number;

		/**
		 * Gets all indices of specific elements.
		 * @param elements The elements to determine their indices.
		 * @returns The indices of the elements, if found, otherwise an empty array.
		 */
		findAllIndicesOf( ...elements: T[] ): number[];

		/**
		 * Gets the indices of all occurrences of any element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 * @returns The indices of the elements, if found, otherwise an empty array.
		 */
		findAllIndicesOfBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): number[];

		/**
		 * Gets an element from the array specified by its index.
		 * @param index The index of the element.
		 * @returns The element, if found.
		 */
		findAt( index: number ): undefined | T;

		/**
		 * Gets the first element from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The first element, if found, otherwise undefined.
		 */
		findFirstOrUndefinedBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): undefined | T;

		/**
		 * Gets the last element from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The last element, if found, otherwise undefined.
		 */
		findLastOrUndefinedBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): undefined | T;

		/**
		 * Gets all elements from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 * @returns The elements, if found, otherwise an empty array.
		 */
		findAllBy( ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): T[];

		/**
		 * Sorts the numeric array by natural numeric order. The array will not be sorted in place.
		 * @returns The sorted array.
		 */
		sortNumeric( this: number[] ): number[];

		/**
		 * Sorts the array specified by a comparison handler. The array will not be sorted in place.
		 * @param comparisonHandler The comparison handler used to compare the elements.
		 * @returns The sorted array.
		 */
		sortBy( comparisonHandler: ( element_1: T, element_2: T ) => number ): T[];

		/**
		 * Maps the elements of the array by a variadic amount of transformation handlers.
		 * @param transformationHandlers The transformation handlers used to transform the elements.
		 * @returns The mapped array.
		 */
		mapBy<TResult = T, THandlers extends ArrayTransformationHandler[] = []>
		(
			...transformationHandlers:
			[ T ] extends [ TResult ]
				? [] |
				[
					transformationHandler: ( element: T ) => TResult,
					...transformationHandlers: ArrayResolvedTransformationHandlerChain<TResult, THandlers>
				]
				: [
					transformationHandler: ( element: T ) => TResult,
					...transformationHandlers: ArrayResolvedTransformationHandlerChain<TResult, THandlers>
				]
		): ArrayTransformationResult<TResult, THandlers>[];

		/**
		 * Concatenates the elements of the array by a specific delimiter string and by a variadic amount of transformation handlers.
		 * @param delimiter The delimiter used to concatenate the mapped elements.
		 * @param transformationHandlers The transformation handlers used to transform the elements.
		 * @returns The concatenated string.
		 */
		joinMapped<TResult = T, THandlers extends ArrayIndexedTransformationHandler[] = []>
		(
			delimiter: string,
			...transformationHandlers:
				[] |
				[
					transformationHandler: ( element: T, elementIndex: number ) => TResult,
					...transformationHandlers: ArrayResolvedIndexedTransformationHandlerChain<TResult, THandlers>
				]
		): string;

		/**
		 * Concatenates the elements of the array by a specific delimiter string and by a variadic amount of predicate handlers.
		 * @param delimiter The delimiter used to concatenate the elements.
		 * @param predicateHandlers The predicate handlers used to determine the elements.
		 * @returns The concatenated string.
		 */
		joinBy( delimiter: string, ...predicateHandlers: ( ( element: T, elementIndex: number ) => boolean )[] ): string;

		/**
		 * Gets the JSON representation of the array.
		 * @returns The JSON representation of the array.
		 */
		toJSON(): unknown[];
	}
}

Object.defineProperty(
	Array.prototype,
	'isEmpty',
	{
		/**
		 * Determines if the array is empty.
		 * @returns True if the array is empty, otherwise false.
		 */
		value: function ( this: unknown[] ): boolean
		       {
			       return 0 === this.length;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'includesBy',
	{
		/**
		 * Determines if the array includes an element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns True if the element is included in the array, otherwise false.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): boolean
		       {
			       let isValid = false;

			       this.every(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       return !isValid;
				       }
			       );

			       return isValid;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'add',
	{
		/**
		 * Adds a variadic amount of elements to the array.
		 * @param elements The elements to add.
		 */
		value: function <TElement>( this: TElement[], ...elements: TElement[] ): void
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       this[ this.length ] = fetchedElement;
				       }
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'addBy',
	{
		/**
		 * Adds a variadic amount of elements to the array by a specific predicate handler.
		 * @param predicateHandler The predicate handler to determine the elements to add.
		 * @param elements The elements to add.
		 */
		value: function <TElement>( this: TElement[], predicateHandler: ( element: TElement, elementIndex: number ) => boolean, ...elements: TElement[] ): void
		       {
			       this.add(
				       ...elements.findAllBy( predicateHandler )
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'replaceAt',
	{
		/**
		 * Replaces all elements in the array specified by their indices.
		 * @param elementReplacement The new element to replace the elements with.
		 * @param indices The indices of the elements to replace.
		 * @throws {InvalidIndexException} An index is invalid.
		 */
		value: function <TElement>( this: TElement[], elementReplacement: TElement, ...indices: number[] ): void
		       {
			       indices.forEach(
				       ( fetchedIndex ) =>
				       {
					       if ( 0 > fetchedIndex || 0 === this.length )
					       {
						       throw InvalidIndexException.with_index( fetchedIndex );
					       }

					       this[ fetchedIndex ] = elementReplacement;
				       }
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'replace',
	{
		/**
		 * Replaces the first occurrences of a variadic amount of elements in the array with a specified element.
		 * @param elementReplacement The new element to replace the element with.
		 * @param elements The elements that have to be replaced.
		 */
		value: function <TElement>( this: TElement[], elementReplacement: TElement, ...elements: TElement[] ): void
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       const index = this.findFirstIndexOf( fetchedElement );

					       if ( undefined !== index )
					       {
						       this.replaceAt( elementReplacement, index );
					       }
				       }
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'replaceBy',
	{
		/**
		 * Replaces the first occurrences of elements in the array specified by a variadic amount of predicate handlers with a specified element.
		 * @param elementReplacement The new element to replace the element with.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 */
		value: function <TElement>( this: TElement[], elementReplacement: TElement, ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): void
		       {
			       const index = this.findFirstIndexOfBy( ...predicateHandlers );

			       if ( undefined !== index )
			       {
				       this.replaceAt( elementReplacement, index );
			       }
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'replaceAll',
	{
		/**
		 * Replaces a variadic amount of elements in the array with a specified element.
		 * @param elementReplacement The new element to replace the elements with.
		 * @param elements The elements that have to be replaced.
		 */
		value: function <TElement>( this: TElement[], elementReplacement: TElement, ...elements: TElement[] ): void
		       {
			       this.replaceAt(
				       elementReplacement,
				       ...this.findAllIndicesOf( ...elements )
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'replaceAllBy',
	{
		/**
		 * Replaces all occurrences of an element in the array specified by a variadic amount of predicate handlers.
		 * @param elementReplacement The new element to replace the elements with.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 */
		value: function <TElement>( this: TElement[], elementReplacement: TElement, ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): void
		       {
			       this.replaceAt(
				       elementReplacement,
				       ...this.findAllIndicesOfBy( ...predicateHandlers )
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'removeAt',
	{
		/**
		 * Removes elements from the array specified by a variadic amount of their indices.
		 * @param indices The indices of the elements to remove.
		 * @throws {InvalidIndexException} An index is invalid.
		 */
		value: function ( this: unknown[], ...indices: number[] ): void
		       {
			       let correctiveElementIndexOffset = 0;

			       indices
				       .sortNumeric()
				       .forEach(
					       ( fetchedIndex ) =>
					       {
						       if ( 0 > fetchedIndex || 0 === this.length )
						       {
							       throw InvalidIndexException.with_index( fetchedIndex );
						       }

						       this.splice( fetchedIndex - correctiveElementIndexOffset, 1 );
						       correctiveElementIndexOffset++;
					       }
				       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'remove',
	{
		/**
		 * Removes the first occurrences of a variadic amount of elements from the array.
		 * @param elements The elements to remove.
		 */
		value: function <TElement>( this: TElement[], ...elements: TElement[] ): void
		       {
			       elements.forEach(
				       ( fetchedElement ) =>
				       {
					       const elementIndex = this.indexOf( fetchedElement );

					       if ( -1 === elementIndex )
					       {
						       return;
					       }

					       this.removeAt( elementIndex );
				       }
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'removeBy',
	{
		/**
		 * Removes the first occurrence of an element from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): void
		       {
			       this.every(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       this.remove( fetchedElement );
					       }

					       return !isValid;
				       }
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'removeAll',
	{
		/**
		 * Removes all occurrences of a variadic amount of elements from the array.
		 * @param elements The elements to remove.
		 */
		value: function <TElement>( this: TElement[], ...elements: TElement[] ): void
		       {
			       const indices: number[] = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = elements.includes( fetchedElement );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       this.removeAt( ...indices );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'removeAllBy',
	{
		/**
		 * Removes all occurrences of elements from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): void
		       {
			       const indices: number[] = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       this.removeAt( ...indices );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findFirstIndexOf',
	{
		/**
		 * Gets the first index of an element.
		 * @param element The element to determine its first index.
		 * @returns The first index of the element, if found, otherwise undefined.
		 */
		value: function <TElement>( this: TElement[], element: TElement ): undefined | number
		       {
			       const index = this.indexOf( element );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findFirstIndexOfBy',
	{
		/**
		 * Gets the first index of an element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The first index of the element, if found, otherwise undefined.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): undefined | number
		       {
			       const index = this.findIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findLastIndexOf',
	{
		/**
		 * Gets the last index of an element.
		 * @param element The element to determine its last index.
		 * @returns The last index of the element, if found, otherwise undefined.
		 */
		value: function <TElement>( this: TElement[], element: TElement ): undefined | number
		       {
			       const index = this.lastIndexOf( element );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findLastIndexOfBy',
	{
		/**
		 * Gets the last index of an element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The last index of the element, if found, otherwise undefined.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): undefined | number
		       {
			       const index = this.findLastIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : index;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findAllIndicesOf',
	{
		/**
		 * Gets all indices of specific elements.
		 * @param elements The elements to determine their indices.
		 * @returns The indices of the elements, if found, otherwise an empty array.
		 */
		value: function <TElement>( this: TElement[], ...elements: TElement[] ): number[]
		       {
			       const indices: number[] = [];

			       this.forEach(
				       ( fetchedElement, fetchedIndex ) =>
				       {
					       if ( true === elements.includes( fetchedElement ) )
					       {
						       indices[ indices.length ] = fetchedIndex;
					       }
				       }
			       );

			       return indices;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findAllIndicesOfBy',
	{
		/**
		 * Gets the indices of all occurrences of any element specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 * @returns The indices of the elements, if found, otherwise an empty array.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): number[]
		       {
			       const indices: number[] = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       indices[ indices.length ] = fetchedElementIndex;
					       }
				       }
			       );

			       return indices;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findAt',
	{
		/**
		 * Gets an element from the array specified by its index.
		 * @param index The index of the element.
		 * @returns The element, if found.
		 */
		value: function <TElement>( this: TElement[], index: number ): undefined | TElement
		       {
			       if ( 0 > index )
			       {
				       throw InvalidIndexException.with_index( index );
			       }

			       return 0 === this.length
				       ? undefined
				       : this[ index ];
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findFirstOrUndefinedBy',
	{
		/**
		 * Gets the first element from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The first element, if found, otherwise undefined.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): undefined | TElement
		       {
			       const index = this.findIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : this[ index ];
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findLastOrUndefinedBy',
	{
		/**
		 * Gets the last element from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the element.
		 * @returns The last element, if found, otherwise undefined.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): undefined | TElement
		       {
			       const index = this.findLastIndex(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       return predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );
				       }
			       );

			       return -1 === index
				       ? undefined
				       : this[ index ];
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'findAllBy',
	{
		/**
		 * Gets all elements from the array specified by a variadic amount of predicate handlers.
		 * @param predicateHandlers The predicate handlers to determine the elements.
		 * @returns The elements, if found, otherwise an empty array.
		 */
		value: function <TElement>( this: TElement[], ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): TElement[]
		       {
			       const elements: TElement[] = [];

			       this.forEach(
				       ( fetchedElement, fetchedElementIndex ) =>
				       {
					       const isValid = predicateHandlers.every(
						       ( fetchedPredicate ) =>
						       {
							       return fetchedPredicate( fetchedElement, fetchedElementIndex );
						       }
					       );

					       if ( true === isValid )
					       {
						       elements[ elements.length ] = fetchedElement;
					       }
				       }
			       );

			       return elements;
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'sortNumeric',
	{
		/**
		 * Sorts the numeric array by natural numeric order. The array will not be sorted in place.
		 * @returns The sorted array.
		 */
		value: function ( this: number[] ): number[]
		       {
			       return [ ...this ].sort(
				       ( element_1, element_2 ) =>
				       {
					       return element_1 - element_2;
				       }
			       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'sortBy',
	{
		/**
		 * Sorts the array specified by a comparison handler. The array will not be sorted in place.
		 * @param comparisonHandler The comparison handler used to compare the elements.
		 * @returns The sorted array.
		 */
		value: function <TElement>( this: TElement[], comparisonHandler: ( element_1: TElement, element_2: TElement ) => number ): TElement[]
		       {
			       return [ ...this ].sort( comparisonHandler );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'mapBy',
	{
		/**
		 * Maps the elements of the array by a variadic amount of transformation handlers.
		 * @param transformationHandlers The transformation handlers used to transform the elements.
		 * @returns The mapped array.
		 */
		value: function ( this: unknown[], ...transformationHandlers: ( ( element: unknown ) => unknown )[] ): unknown[]
		       {
			       return this
				       .map(
					       ( fetchedItem ) =>
					       {
						       transformationHandlers.forEach(
							       ( fetchedTransformationHandler ) =>
							       {
								       fetchedItem = fetchedTransformationHandler( fetchedItem );
							       }
						       );

						       return fetchedItem;
					       }
				       );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'joinMapped',
	{
		/**
		 * Concatenates the elements of the array by a specific delimiter string and by a variadic amount of transformation handlers.
		 * @param delimiter The delimiter used to concatenate the mapped elements.
		 * @param transformationHandlers The transformation handlers used to transform the elements.
		 * @returns The concatenated string.
		 */
		value: function ( this: unknown[], delimiter: string, ...transformationHandlers: ( ( element: unknown, elementIndex: number ) => unknown )[] ): string
		       {
			       let transformedArray = this;
			       transformationHandlers.forEach(
				       ( fetchedTransformationHandler ) =>
				       {
					       transformedArray = transformedArray.map( fetchedTransformationHandler );
				       }
			       );

			       return transformedArray.join( delimiter );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'joinBy',
	{
		/**
		 * Concatenates the elements of the array by a specific delimiter string and by a variadic amount of predicate handlers.
		 * @param delimiter The delimiter used to concatenate the elements.
		 * @param predicateHandlers The predicate handlers used to determine the elements.
		 * @returns The concatenated string.
		 */
		value: function <TElement>( this: TElement[], delimiter: string, ...predicateHandlers: ( ( element: TElement, elementIndex: number ) => boolean )[] ): string
		       {
			       return this
				       .findAllBy( ...predicateHandlers )
				       .join( delimiter );
		       }
	}
);

Object.defineProperty(
	Array.prototype,
	'toJSON',
	{
		/**
		 * Gets the JSON representation of the array.
		 * @returns The JSON representation of the array.
		 */
		value: function ( this: unknown[] ): unknown[]
		       {
			       return [ ...this ]
				       .map(
					       ( fetchedItem ) =>
					       {
						       return undefined === fetchedItem || null === fetchedItem || false === fetchedItem.hasMethod( 'toJSON' )
							       ? fetchedItem
							       : fetchedItem.toJSON();
					       }
				       );
		       }
	}
);
