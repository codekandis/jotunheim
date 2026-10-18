'use strict';

import type { ArrayTransformationHandler } from './array-transformation-handler.js';

/**
 * Represents a tuple of transformation handler signatures with consecutive input and return types.
 * @template TElement The input type of the first handler.
 * @template THandlers The handler signatures providing the return types of the tuple.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ArrayTransformationHandlerChain<TElement, THandlers extends ArrayTransformationHandler[]> =
	THandlers extends [ infer THandler extends ArrayTransformationHandler, ...infer TRest extends ArrayTransformationHandler[] ]
		? [
			( element: TElement ) => ReturnType<THandler>, ...ArrayTransformationHandlerChain<ReturnType<THandler>, TRest>
		]
		: [];
