'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationsSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the mappings of validated object properties.
	 * @type {Collection<ObjectPropertyMapping>}
	 */
	#_objectPropertyMappings;

	/**
	 * Constructor method.
	 * @param {Collection<ObjectPropertyMapping>} objectPropertyMappings The mappings of validated object properties.
	 */
	constructor( objectPropertyMappings )
	{
		super();

		this.#_objectPropertyMappings = objectPropertyMappings;
	}

	/**
	 * Gets the mappings of validated object properties.
	 * @returns {Collection<Object>} The mappings of validated object properties.
	 */
	get objectPropertyMappings()
	{
		return this.#_objectPropertyMappings;
	}
}
