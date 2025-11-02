'use strict';

import { Abstract } from '../types/abstract.js';

/**
 * Represents an application page match.
 * @author Christian Ramelow <info@codekandis.net>
 * @template TApplicationPageClass
 */
export class ApplicationPageMatch extends Abstract
{
	/**
	 * Stores the application page class.
	 * @type {function(new:TApplicationPageClass, ...*): TApplicationPageClass}
	 */
	#_applicationPageClass;

	/**
	 * Stores the arguments of the application page.
	 * @type {Object<String, String>}
	 */
	#_applicationPageArguments;

	/**
	 * Constructor method.
	 * @param {function(new:TApplicationPageClass, ...*): TApplicationPageClass} applicationPageClass The application page class.
	 * @param {Object<String, String>} applicationPageArguments The arguments of the application page.
	 */
	constructor( applicationPageClass, applicationPageArguments )
	{
		super();

		this.#_applicationPageClass     = applicationPageClass;
		this.#_applicationPageArguments = applicationPageArguments;
	}

	/**
	 * Gets the application page class.
	 * @return {function(new:TApplicationPageClass, ...*): TApplicationPageClass} The application page class.
	 */
	get applicationPageClass()
	{
		return this.#_applicationPageClass;
	}

	/**
	 * Gets the application page arguments.
	 * @return {Object<String, String>} The application page arguments.
	 */
	get applicationPageArguments()
	{
		return this.#_applicationPageArguments;
	}
}
