'use strict';

import { LogicException } from './logic-exception.js';

/**
 * Represents the exception if an attempt to instanciate a static class has been made.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidStaticClassInstantiationException extends LogicException
{
	/**
	 * Static constructor method.
	 * @param {string} className The name of the class which has been tried to instantiate.
	 * @returns {InvalidStaticClassInstantiationException}
	 * @constructor
	 */
	static with_className( className )
	{
		return new this(
			String.format`The static class \`${ 0 }\` cannot be instantiated.`( className )
		);
	}

	/**
	 * Static constructor method.
	 * @param {object} object The object which has been tried to instantiate.
	 * @returns {InvalidStaticClassInstantiationException}
	 * @constructor
	 */
	static with_object( object )
	{
		return this.with_className( object.__proto__.constructor.name );
	}
}
