'use strict';

import { EventArguments } from './event-arguments.js';

/**
 * Represents the arguments of the initializing event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InitializingEventArguments extends EventArguments
{
	/**
	 * Stores the object which has been initialized.
	 * @type {object}
	 */
	#_object;

	/**
	 * Constructor method.
	 * @param {object} object The object which has been initialized.
	 */
	constructor( object )
	{
		super();

		this.#_object = object;
	}

	/**
	 * Gets the object which has been initialized.
	 * @returns {object} The object which has been initialized.
	 */
	get object()
	{
		return this.#_object;
	}
}
