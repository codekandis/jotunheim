'use strict';

import { EventArguments } from '../event-arguments.js';

/**
 * Represents the event arguments of any property related event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyEventArguments extends EventArguments
{
	/**
	 * Stores the object whose property is affected.
	 * @type {object}
	 */
	#_object;

	/**
	 * Stores the name of the affected property.
	 * @type {string}
	 */
	#_propertyName;

	/**
	 * Constructor method.
	 * @param {object} object The object whose property is affected.
	 * @param {string} propertyName The name of the affected property.
	 */
	constructor( object, propertyName )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
	}

	/**
	 * Gets the object whose property is affected.
	 * @returns {object} The object whose property is affected.
	 */
	get object()
	{
		return this.#_object;
	}

	/**
	 * Gets the name of the affected property.
	 * @returns {string} The name of the affected property.
	 */
	get propertyName()
	{
		return this.#_propertyName;
	}
}
