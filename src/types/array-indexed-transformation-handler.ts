'use strict';

/**
 * Represents a transformation handler signature with an unspecified element type, a numeric element index, and an unspecified return type.
 * The `never` parameter permits handler signatures with different element types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ArrayIndexedTransformationHandler = ( element: never, elementIndex: number ) => unknown;
