'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents a mapping of a validated object property and its validation error messages.
 */
export class ObjectPropertyErrorMessagesMapping extends Abstract
{
	/**
	 * Stores the validated object.
	 * @type {Object}
	 */
	#_object;

	/**
	 * Stores the name of the validated object's property.
	 * @type {String}
	 */
	#_propertyName;

	/**
	 * Stores the validation error messages.
	 * @type {Collection<String>}
	 */
	#_errorMessages;

	/**
	 * Constructor method.
	 * @param {Object} object The validated object.
	 * @param {String} propertyName The name of the validated object's property.
	 * @param {Collection<String>} errorMessages The validation error messages.
	 */
	constructor( object, propertyName, errorMessages )
	{
		super();

		this.#_object        = object;
		this.#_propertyName  = propertyName;
		this.#_errorMessages = errorMessages;
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
	 * Gets the name of the validated object's property.
	 * @returns {String} The name of the validated object's property.
	 */
	get propertyName()
	{
		return this.#_propertyName;
	}

	/**
	 * Gets the validation error messages.
	 * @returns {Collection<String>} The validation error messages.
	 */
	get errorMessages()
	{
		return this.#_errorMessages;
	}
}
