'use strict';

/**
 * Represents the predicate of any object property determination.
 * @param propertyValue The value of the currently iterated property.
 * @param propertyName The name of the currently iterated property.
 * @returns True if the currently iterated property matches the predicate, otherwise false.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ObjectPropertyPredicate<TValue = unknown> = ( propertyValue: TValue, propertyName: string ) => boolean;
