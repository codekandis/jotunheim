'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property filterings failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyFilteringsFailedEventArguments extends EventArguments
{
	/**
	 * Stores the mappings of filtered object properties and filtering error messages.
	 * @type {Collection<ObjectPropertyErrorMessagesMapping>}
	 */
	#_objectPropertyErrorMessagesMappings;

	/**
	 * Constructor method.
	 * @param {Collection<ObjectPropertyErrorMessagesMapping>} objectPropertyErrorMessagesMappings The mappings of filtered object properties and filtering error messages.
	 */
	constructor( objectPropertyErrorMessagesMappings )
	{
		super();

		this.#_objectPropertyErrorMessagesMappings = objectPropertyErrorMessagesMappings;
	}

	/**
	 * Gets the mappings of filtered object properties and filtering error messages.
	 * @returns {Collection<ObjectPropertyErrorMessagesMapping>} The mappings of filtered object properties and filtering error messages.
	 */
	get objectPropertyErrorMessagesMappings()
	{
		return this.#_objectPropertyErrorMessagesMappings;
	}
}
