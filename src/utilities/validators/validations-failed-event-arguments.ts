'use strict';

import type { Collection } from '../../collections/collection.js';
import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationsFailedEventArguments extends EventArguments
{
	/**
	 * Stores the validation error messages.
	 */
	#_errorMessages: Collection;

	/**
	 * Constructor method.
	 * @param errorMessages The validation error messages.
	 */
	constructor( errorMessages: Collection )
	{
		super();

		this.#_errorMessages = errorMessages;
	}

	/**
	 * Gets the validation error messages.
	 * @returns The validation error messages.
	 */
	get errorMessages(): Collection
	{
		return this.#_errorMessages;
	}
}
