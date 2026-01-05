'use strict';

/**
 * Validates if a function is a real function or method.
 * @method isFunction
 * @memberOf Function.prototype
 * @param {number} value The value to validate.
 * @param {number} minValue The minimum value of the range.
 * @param {number} maxValue The maximum value of the range.
 * @returns {boolean} True
 */
Object.defineProperty(
	Function.prototype,
	'isFunction',
	{
		value: function ()
		       {
			       const doesNotLookLikeClass = false === /^class\s/.test(
				       Function.prototype.toString.call( this )
			       );
			       const hasNoPrototype       = undefined === Object.getOwnPropertyDescriptor( this, 'prototype' );

			       return doesNotLookLikeClass && hasNoPrototype;
		       }
	}
);

/**
 * Validates if a function is a class.
 * @method isClass
 * @memberOf Function.prototype
 * @param {number} value The value to validate.
 * @param {number} minValue The minimum value of the range.
 * @param {number} maxValue The maximum value of the range.
 * @returns {boolean} True
 */
Object.defineProperty(
	Function.prototype,
	'isClass',
	{
		value: function ()
		       {
			       const looksLikeClass         = /^class\s/.test(
				       Function.prototype.toString.call( this )
			       );
			       const propertyDescriptor     = Object.getOwnPropertyDescriptor( this, 'prototype' );
			       const prototypeIsNonWritable = undefined !== propertyDescriptor && false === propertyDescriptor.writable;

			       return looksLikeClass && prototypeIsNonWritable;
		       }
	}
);
