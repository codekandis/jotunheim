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
	 * @type {function(new:TApplicationPageClass, ...any): TApplicationPageClass}
	 */
	#_applicationPageClass;

	/**
	 * Stores the arguments of the application page.
	 * @type {Record<string, string>}
	 */
	#_applicationPageArguments;

	/**
	 * Constructor method.
	 * @param {function(new:TApplicationPageClass, ...any): TApplicationPageClass} applicationPageClass The application page class.
	 * @param {Record<string, string>} applicationPageArguments The arguments of the application page.
	 */
	constructor( applicationPageClass, applicationPageArguments )
	{
		super();

		this.#_applicationPageClass     = applicationPageClass;
		this.#_applicationPageArguments = applicationPageArguments;
	}

	/**
	 * Gets the application page class.
	 * @return {function(new:TApplicationPageClass, ...any): TApplicationPageClass} The application page class.
	 */
	get applicationPageClass()
	{
		return this.#_applicationPageClass;
	}

	/**
	 * Gets the application page arguments.
	 * @return {Record<string, string>} The application page arguments.
	 */
	get applicationPageArguments()
	{
		return this.#_applicationPageArguments;
	}
}
