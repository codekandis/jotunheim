'use strict';

import type { ArrayTransformationHandlerChain } from './array-transformation-handler-chain.js';
import type { ArrayTransformationHandler } from './array-transformation-handler.js';

/**
 * Represents the original handler tuple if the consecutively typed tuple is assignable to it, otherwise the consecutively typed tuple.
 * @template TElement The input type of the first handler.
 * @template THandlers The original tuple of handler signatures.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ArrayResolvedTransformationHandlerChain<TElement, THandlers extends ArrayTransformationHandler[]> =
	ArrayTransformationHandlerChain<TElement, THandlers> extends THandlers
		? THandlers
		: ArrayTransformationHandlerChain<TElement, THandlers>;
