'use strict';

/**
 * Represents the handler of any object property iteration.
 * @param propertyValue The value of the currently iterated property.
 * @param propertyName The name of the currently iterated property.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ObjectPropertyIterationHandler<TValue = unknown> = ( propertyValue: TValue, propertyName: string ) => void;
