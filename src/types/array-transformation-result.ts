'use strict';

import type { ArrayTransformationHandler } from './array-transformation-handler.js';

/**
 * Represents the return type of the last transformation handler, or the original element type for an empty handler tuple.
 * @template TElement The element type used if the handler tuple is empty.
 * @template THandlers The tuple of handler signatures.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ArrayTransformationResult<TElement, THandlers extends ArrayTransformationHandler[]> =
	THandlers extends [ ...ArrayTransformationHandler[], infer THandler extends ArrayTransformationHandler ]
		? ReturnType<THandler>
		: TElement;
