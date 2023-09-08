'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the validated object.
	 * @type {Object}
	 */
	#_object;

	/**
	 * Stores the name of the object's property which has been validated.
	 * @type {String}
	 */
	#_propertyName;

	/**
	 * Constructor method.
	 * @param {Object} object The validated object.
	 * @param {String} propertyName The name of the object's property which has been validated.
	 */
	constructor( object, propertyName )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
	}

	/**
	 * Gets the validated object.
	 * @returns {Object} The validated object.
	 */
	get object()
	{
		return this.#_object;
	}

	/**
	 * Gets the name of the object's property which has been validated.
	 * @returns {String} The name of the object's property which has been validated.
	 */
	get propertyName()
	{
		return this.#_propertyName;
	}
}
