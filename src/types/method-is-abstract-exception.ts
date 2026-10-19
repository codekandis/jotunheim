'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents an exception if an abstract method has been called.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MethodIsAbstractException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param className The name of the called class.
	 * @param methodName The name of the abstract method.
	 * @returns The created exception.
	 */
	static with_classNameAndMethodName( className: string, methodName: string ): MethodIsAbstractException
	{
		return new this(
			String.format`The method \`${ 0 }::${ 1 }()\` is declared abstract and therefore must be defined.`( className, methodName )
		);
	}

	/**
	 * Static constructor method.
	 * @param className The name of the called class.
	 * @param method The abstract method.
	 * @returns The created exception.
	 */
	static with_classNameAndMethod( className: string, method: ( ...args: never[] ) => unknown ): MethodIsAbstractException
	{
		return this.with_classNameAndMethodName( className, method.name );
	}

	/**
	 * Static constructor method.
	 * @param object The called object.
	 * @param methodName The name of the abstract method.
	 * @returns The created exception.
	 */
	static with_objectAndMethodName( object: object, methodName: string ): MethodIsAbstractException
	{
		return this.with_classNameAndMethodName( object.__proto__.constructor.name, methodName );
	}

	/**
	 * Static constructor method.
	 * @param object The called object.
	 * @param method The abstract method.
	 * @returns The created exception.
	 */
	static with_objectAndMethod( object: object, method: ( ...args: never[] ) => unknown ): MethodIsAbstractException
	{
		return this.with_classNameAndMethodName( object.__proto__.constructor.name, method.name );
	}
}
