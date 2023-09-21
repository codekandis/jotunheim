'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property filterings succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyFilteringsSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the mappings of filtered object properties and filtered values.
	 * @type {Collection<ObjectPropertyFilteredValuesMapping>}
	 */
	#_objectPropertyFilteredValuesMappings;

	/**
	 * Constructor method.
	 * @param {Collection<ObjectPropertyFilteredValuesMapping>} objectPropertyFilteredValuesMappings The mappings of filtered object properties and filtered values.
	 */
	constructor( objectPropertyFilteredValuesMappings )
	{
		super();

		this.#_objectPropertyFilteredValuesMappings = objectPropertyFilteredValuesMappings;
	}

	/**
	 * Gets the mappings of filtered object properties and filtered values.
	 * @returns {Collection<Object>} The mappings of filtered object properties and filtered values.
	 */
	get objectPropertyFilteredValuesMappings()
	{
		return this.#_objectPropertyFilteredValuesMappings;
	}
}
