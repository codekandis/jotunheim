'use strict';

import type { ArrayIndexedTransformationHandlerChain } from './array-indexed-transformation-handler-chain.js';
import type { ArrayIndexedTransformationHandler } from './array-indexed-transformation-handler.js';

/**
 * Represents the original indexed handler tuple if the consecutively typed tuple is assignable to it, otherwise the consecutively typed tuple.
 * @template TElement The input type of the first handler.
 * @template THandlers The original tuple of indexed handler signatures.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ArrayResolvedIndexedTransformationHandlerChain<TElement, THandlers extends ArrayIndexedTransformationHandler[]> =
	ArrayIndexedTransformationHandlerChain<TElement, THandlers> extends THandlers
		? THandlers
		: ArrayIndexedTransformationHandlerChain<TElement, THandlers>;
