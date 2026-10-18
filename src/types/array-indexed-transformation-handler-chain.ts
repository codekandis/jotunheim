'use strict';

import type { ArrayIndexedTransformationHandler } from './array-indexed-transformation-handler.js';

/**
 * Represents a tuple of indexed transformation handler signatures with consecutive input and return types.
 * @template TElement The input type of the first handler.
 * @template THandlers The indexed handler signatures providing the return types of the tuple.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ArrayIndexedTransformationHandlerChain<TElement, THandlers extends ArrayIndexedTransformationHandler[]> =
	THandlers extends [ infer THandler extends ArrayIndexedTransformationHandler, ...infer TRest extends ArrayIndexedTransformationHandler[] ]
		? [
			( element: TElement, elementIndex: number ) => ReturnType<THandler>, ...ArrayIndexedTransformationHandlerChain<ReturnType<THandler>, TRest>
		]
		: [];
