'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationFailedEventArguments extends EventArguments
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
	 * Stores the validation error message.
	 * @type {String}
	 */
	#_errorMessage;

	/**
	 * Constructor method.
	 * @param {Object} object The validated object.
	 * @param {String} propertyName The name of the object's property which has been validated.
	 * @param {String} errorMessage The validation error message.
	 */
	constructor( object, propertyName, errorMessage )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
		this.#_errorMessage = errorMessage;
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

	/**
	 * Gets the validation error message.
	 * @returns {String} The validation error message.
	 */
	get errorMessage()
	{
		return this.#_errorMessage;
	}
}
