'use strict';

import { Abstract } from '../types/abstract.js';
import { MethodIsAbstractException } from '../types/method-is-abstract-exception.js';

/**
 * Represents the base class of any application page.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractApplicationPage extends Abstract
{
	/**
	 * Stores the arguments of the application page.
	 * @type {Object<String, String>}
	 */
	__arguments;

	/**
	 * Constructor method.
	 * @param {Object<String, String>} applicationPageArguments The arguments of the application page.
	 */
	constructor( applicationPageArguments )
	{
		super();

		this.__arguments = applicationPageArguments;
	}

	/**
	 * Executes the application page.
	 */
	execute()
	{
		throw MethodIsAbstractException.with_objectAndMethod( this, this.execute );
	}
}
