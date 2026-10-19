'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if an attempt to instantiate a static class has been made.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidStaticClassInstantiationException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param className The name of the class that was attempted to be instantiated.
	 * @returns The created exception.
	 */
	static with_className( className: string ): InvalidStaticClassInstantiationException
	{
		return new this(
			String.format`The static class \`${ 0 }\` cannot be instantiated.`( className )
		);
	}

	/**
	 * Static constructor method.
	 * @param object The object that was attempted to be instantiated.
	 * @returns The created exception.
	 */
	static with_object( object: object ): InvalidStaticClassInstantiationException
	{
		return this.with_className( object.__proto__.constructor.name );
	}
}
