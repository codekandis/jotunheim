'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if a method has not been implemented.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class NotImplementedException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param object The object containing the abstract constant.
	 * @param constantName The name of the constant which is abstract.
	 * @returns The created exception.
	 */
	static with_abstractConstant( object: object, constantName: string ): NotImplementedException
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
	 * @param object The object containing the abstract property.
	 * @param propertyName The name of the property which is abstract.
	 * @returns The created exception.
	 */
	static with_abstractProperty( object: object, propertyName: string ): NotImplementedException
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
	 * @param object The object containing the abstract method.
	 * @param methodName The name of the method which is abstract.
	 * @returns The created exception.
	 */
	static with_abstractMethod( object: object, methodName: string ): NotImplementedException
	{
		return new this(
			String.format`The method \`${ 0 }::${ 1 }()\` is abstract and therefore must be implemented.`(
				object.__proto__.constructor.name,
				methodName
			)
		);
	}
}
