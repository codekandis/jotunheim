'use strict';

/**
 * Represents prototype extensions and types of the class `Generator`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import type { GeneratorElementIterationHandler } from './generator-element-iteration-handler.js';

declare global
{
	/**
	 * Represents extensions of a generator.
	 */
	interface Generator<T, TReturn, TNext>
	{
		/**
		 * Invokes a specific iteration handler on every generator element.
		 * @param iterationHandler The handler invoked for each element.
		 */
		forEach( this: Generator<T, TReturn, TNext>, iterationHandler: GeneratorElementIterationHandler<T> ): void;
	}
}

/**
 * Stores the prototype of any generator function.
 */
export const GeneratorFunctionPrototype = Object.getPrototypeOf(
	function* ()
	{
	}
) as {
	readonly prototype: Generator
};

Object.defineProperty(
	GeneratorFunctionPrototype.prototype,
	'forEach',
	{
		/**
		 * Invokes a specific iteration handler on every generator element.
		 * @param iterationHandler The handler invoked for each element.
		 */
		value: function <TElement>( this: Generator<TElement>, iterationHandler: GeneratorElementIterationHandler<TElement> ): void
		       {
			       let elementIndex = 0;
			       for ( const elementValue of this )
			       {
				       iterationHandler( elementValue, elementIndex++ );
			       }
		       }
	}
);
