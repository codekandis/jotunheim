'use strict';

/**
 * Represents a transformation handler signature with an unspecified element type and return type.
 * The `never` parameter permits handler signatures with different element types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ArrayTransformationHandler = ( element: never ) => unknown;
