'use strict';

/**
 * Represents the handler of any generator element iteration.
 * @param element The currently iterated element.
 * @param elementIndex The index of the currently iterated element.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type GeneratorElementIterationHandler<TElement> = ( element: TElement, elementIndex: number ) => void;
