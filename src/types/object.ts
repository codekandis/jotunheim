'use strict';

/**
 * Represents prototype extensions and types of the class `Object`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import type { ObjectMergeResult } from './object-merge-result.js';
import type { ObjectPropertyIterationHandler } from './object-property-iteration-handler.js';
import type { ObjectPropertyPredicate } from './object-property-predicate.js';

declare global
{
	/**
	 * Represents extensions of an object.
	 */
	interface Object
	{
		/**
		 * Determines if the object has no enumerable own properties.
		 * @returns True if the object has no enumerable own properties, otherwise false.
		 */
		isEmpty(): boolean;

		/**
		 * Determines if a property exists in the object and its value is neither undefined nor a function or symbol.
		 * @param name The name of the property.
		 * @returns True if the property exists and its value has an allowed type, otherwise false.
		 */
		hasProperty( name: string ): boolean;

		/**
		 * Determines if the object has a member of type function.
		 * @param name The name of the method.
		 * @returns True if the method exists, otherwise false.
		 */
		hasMethod( name: string ): boolean;

		/**
		 * Gets the names of the object's enumerable own properties.
		 * @returns The names of the object's enumerable own properties.
		 */
		keys(): string[];

		/**
		 * Gets the values of the object's enumerable own properties.
		 * @returns The values of the object's enumerable own properties.
		 */
		values(): unknown[];

		/**
		 * Invokes a specific iteration handler on every enumerable own property of the object.
		 * @param iterationHandler The iteration handler to invoke.
		 */
		forEach( iterationHandler: ObjectPropertyIterationHandler ): void;

		/**
		 * Determines if a specific predicate returns true for every enumerable own property of the object.
		 * @param predicate The predicate to invoke.
		 * @returns True if the predicate returns true for every property, otherwise false.
		 */
		every( predicate: ObjectPropertyPredicate ): boolean;

		/**
		 * Binds the object as the `this` value of a specific function or method.
		 * @param method The function or method to bind to the object.
		 * @returns The bound function or method.
		 */
		bindTo<TMethod extends ( ...args: never[] ) => unknown>( method: TMethod ): OmitThisParameter<TMethod>;

		/**
		 * Binds the object as the `this` value of multiple functions or methods.
		 * @param methods The functions or methods to bind to the object.
		 * @returns The bound functions or methods.
		 */
		bindToAll<TMethod extends ( ...args: never[] ) => unknown>( methods: TMethod[] ): OmitThisParameter<TMethod>[];

		/**
		 * Merges a variadic amount of objects into the object. The object itself will be mutated.
		 * @param objects The objects to merge.
		 * @returns The merged object.
		 */
		merge<TTarget extends object, TSources extends object[]>( this: TTarget, ...objects: TSources ): ObjectMergeResult<TTarget, TSources>;
	}
}

Object.defineProperty(
	Object.prototype,
	'isEmpty',
	{
		/**
		 * Determines if the object has no enumerable own properties.
		 * @returns True if the object has no enumerable own properties, otherwise false.
		 */
		value: function ( this: object ): boolean
		       {
			       return 0 === this.keys().length;
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'hasProperty',
	{
		/**
		 * Determines if a property exists in the object and its value is neither undefined nor a function or symbol.
		 * @param name The name of the property.
		 * @returns True if the property exists and its value has an allowed type, otherwise false.
		 */
		value: function ( this: Record<string, unknown>, name: string ): boolean
		       {
			       const invalidTypes = [
				       'undefined',
				       'function',
				       'symbol'
			       ];
			       return true === name in this
				       && false === invalidTypes.includes( typeof this[ name ] );
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'hasMethod',
	{
		/**
		 * Determines if the object has a member of type function.
		 * @param name The name of the method.
		 * @returns True if the method exists, otherwise false.
		 */
		value: function ( this: Record<string, unknown>, name: string ): boolean
		       {
			       return 'function' === typeof this[ name ];
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'keys',
	{
		/**
		 * Gets the names of the object's enumerable own properties.
		 * @returns The names of the object's enumerable own properties.
		 */
		value: function ( this: object ): string[]
		       {
			       return Object.keys( this );
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'values',
	{
		/**
		 * Gets the values of the object's enumerable own properties.
		 * @returns The values of the object's enumerable own properties.
		 */
		value: function ( this: object ): unknown[]
		       {
			       return Object.values( this );
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'forEach',
	{
		/**
		 * Invokes a specific iteration handler on every enumerable own property of the object.
		 * @param iterationHandler The iteration handler to invoke.
		 */
		value: function ( this: object, iterationHandler: ObjectPropertyIterationHandler ): void
		       {
			       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( this ) )
			       {
				       iterationHandler( fetchedPropertyValue, fetchedPropertyName );
			       }
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'every',
	{
		/**
		 * Determines if a specific predicate returns true for every enumerable own property of the object.
		 * @param predicate The predicate to invoke.
		 * @returns True if the predicate returns true for every property, otherwise false.
		 */
		value: function ( this: object, predicate: ObjectPropertyPredicate ): boolean
		       {
			       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( this ) )
			       {
				       if ( false === predicate( fetchedPropertyValue, fetchedPropertyName ) )
				       {
					       return false;
				       }
			       }

			       return true;
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'bindTo',
	{
		/**
		 * Binds the object as the `this` value of a specific function or method.
		 * @param method The function or method to bind to the object.
		 * @returns The bound function or method.
		 */
		value: function <TMethod extends ( ...args: never[] ) => unknown>( this: object, method: TMethod ): OmitThisParameter<TMethod>
		       {
			       return method.bind( this ) as OmitThisParameter<TMethod>;
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'bindToAll',
	{
		/**
		 * Binds the object as the `this` value of multiple functions or methods.
		 * @param methods The functions or methods to bind to the object.
		 * @returns The bound functions or methods.
		 */
		value: function <TMethod extends ( ...args: never[] ) => unknown>( this: object, methods: TMethod[] ): OmitThisParameter<TMethod>[]
		       {
			       return methods.map(
				       ( fetchedMethod ) =>
				       {
					       return fetchedMethod.bind( this ) as OmitThisParameter<TMethod>;
				       }
			       );
		       }
	}
);

Object.defineProperty(
	Object.prototype,
	'merge',
	{
		/**
		 * Merges a variadic amount of objects into the object. The object itself will be mutated.
		 * @param objects The objects to merge.
		 * @returns The merged object.
		 */
		value: function <TTarget extends object, TSources extends object[]>( this: TTarget, ...objects: TSources ): ObjectMergeResult<TTarget, TSources>
		       {
			       objects.forEach(
				       ( fetchedObject ) =>
				       {
					       for ( const [ fetchedPropertyName, fetchedPropertyValue ] of Object.entries( fetchedObject ) )
					       {
						       ( this as Record<string, unknown> )[ fetchedPropertyName ] = fetchedPropertyValue;
					       }
				       }
			       );

			       return this as ObjectMergeResult<TTarget, TSources>;
		       }
	}
);
