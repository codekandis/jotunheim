'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationsFailedEventArguments extends EventArguments
{
	/**
	 * Stores the mappings of validated object properties and validation error messages.
	 * @type {Collection<ObjectPropertyErrorMessagesMapping>}
	 */
	#_objectPropertyErrorMessagesMappings;

	/**
	 * Constructor method.
	 * @param {Collection<ObjectPropertyErrorMessagesMapping>} objectPropertyErrorMessagesMappings The mappings of validated object properties and validation error messages.
	 */
	constructor( objectPropertyErrorMessagesMappings )
	{
		super();

		this.#_objectPropertyErrorMessagesMappings = objectPropertyErrorMessagesMappings;
	}

	/**
	 * Gets the mappings of validated object properties and validation error messages.
	 * @returns {Collection<ObjectPropertyErrorMessagesMapping>} The mappings of validated object properties and validation error messages.
	 */
	get objectPropertyErrorMessagesMappings()
	{
		return this.#_objectPropertyErrorMessagesMappings;
	}
}
