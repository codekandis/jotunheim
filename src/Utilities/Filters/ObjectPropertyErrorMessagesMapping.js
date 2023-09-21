'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents a mapping of a filtered object property and its filtering error messages.
 */
export class ObjectPropertyErrorMessagesMapping extends Abstract
{
	/**
	 * Stores the filtered object.
	 * @type {Object}
	 */
	#_object;

	/**
	 * Stores the name of the filtered object's property.
	 * @type {String}
	 */
	#_propertyName;

	/**
	 * Stores the filtering error messages.
	 * @type {Collection<String>}
	 */
	#_errorMessages;

	/**
	 * Constructor method.
	 * @param {Object} object The filtered object.
	 * @param {String} propertyName The name of the filtered object's property.
	 * @param {Collection<String>} errorMessages The filtering error messages.
	 */
	constructor( object, propertyName, errorMessages )
	{
		super();

		this.#_object        = object;
		this.#_propertyName  = propertyName;
		this.#_errorMessages = errorMessages;
	}

	/**
	 * Gets the filtered object.
	 * @returns {Object} The filtered object.
	 */
	get object()
	{
		return this.#_object;
	}

	/**
	 * Gets the name of the filtered object's property.
	 * @returns {String} The name of the filtered object's property.
	 */
	get propertyName()
	{
		return this.#_propertyName;
	}

	/**
	 * Gets the filtering error messages.
	 * @returns {Collection<String>} The filtering error messages.
	 */
	get errorMessages()
	{
		return this.#_errorMessages;
	}
}
