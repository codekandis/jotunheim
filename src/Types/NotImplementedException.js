'use strict';

import { Exception } from './Exception.js';

/**
 * Represents the exception if a method has not been implemented.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class NotImplementedException extends Exception
{
	/**
	 * Static constructor method.
	 * @param {Object} object The object containing the abstract constant.
	 * @param {String} constantName The name of the constant which is abstract.
	 * @returns {NotImplementedException}
	 * @constructor
	 */
	static with_abstractConstant( object, constantName )
	{
		return new this(
			String.format`The constant \`${ 0 }::${ 1 }\` is abstract and therefore must be implemented.`(
				object.__proto__.constructor.name,
				constantName
			)
		);
	}

	/**
	 * Static constructor method.
	 * @param {Object} object The object containing the abstract property.
	 * @param {String} propertyName The name of the property which is abstract.
	 * @returns {NotImplementedException}
	 * @constructor
	 */
	static with_abstractProperty( object, propertyName )
	{
		return new this(
			String.format`The property \`${ 0 }::${ 1 }\` is abstract and therefore must be implemented.`(
				object.__proto__.constructor.name,
				propertyName
			)
		);
	}

	/**
	 * Static constructor method.
	 * @param {Object} object The object containing the abstract method.
	 * @param {String} methodName The name of the method which is abstract.
	 * @returns {NotImplementedException}
	 * @constructor
	 */
	static with_abstractMethod( object, methodName )
	{
		return new this(
			String.format`The method \`${ 0 }::${ 1 }()\` is abstract and therefore must be implemented.`(
				object.__proto__.constructor.name,
				methodName
			)
		);
	}
}
