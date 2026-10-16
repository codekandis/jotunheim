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
	 */
	#_object: object;

	/**
	 * Constructor method.
	 * @param object The object which has been initialized.
	 */
	constructor( object: object )
	{
		super();

		this.#_object = object;
	}

	/**
	 * Gets the object which has been initialized.
	 * @returns The object which has been initialized.
	 */
	get object(): object
	{
		return this.#_object;
	}
}
