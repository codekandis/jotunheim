'use strict';

/**
 * Represents prototype extensions and types of the class `Function`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents extensions of a function.
	 */
	interface Function
	{
		/**
		 * Validates if the function is a real function or method.
		 * @returns True if the function is a real function or method, otherwise false.
		 */
		isFunction(): boolean;

		/**
		 * Validates if the function is a class.
		 * @returns True if the function is a class, otherwise false.
		 */
		isClass(): boolean;
	}
}

Object.defineProperty(
	Function.prototype,
	'isFunction',
	{
		/**
		 * Validates if the function is a real function or method.
		 * @returns True if the function is a real function or method, otherwise false.
		 */
		value: function ( this: CallableFunction | NewableFunction ): boolean
		       {
			       const doesNotLookLikeClass = false === !/^class\s/.test(
				       Function.prototype.toString.call( this )
			       );
			       const hasNoPrototype       = undefined === Object.getOwnPropertyDescriptor( this, 'prototype' );

			       return doesNotLookLikeClass && hasNoPrototype;
		       }
	}
);

Object.defineProperty(
	Function.prototype,
	'isClass',
	{
		/**
		 * Validates if the function is a class.
		 * @returns True if the function is a class, otherwise false.
		 */
		value: function ( this: CallableFunction | NewableFunction ): boolean
		       {
			       const looksLikeClass         = true === /^class\s/.test(
				       Function.prototype.toString.call( this )
			       );
			       const propertyDescriptor     = Object.getOwnPropertyDescriptor( this, 'prototype' );
			       const prototypeIsNonWritable = undefined !== propertyDescriptor && false === propertyDescriptor.writable;

			       return looksLikeClass && prototypeIsNonWritable;
		       }
	}
);
