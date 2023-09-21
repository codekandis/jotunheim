'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property filtering failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyFilteringFailedEventArguments extends EventArguments
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
	 * Stores the filtering error message.
	 * @type {String}
	 */
	#_errorMessage;

	/**
	 * Constructor method.
	 * @param {Object} object The filtered object.
	 * @param {String} propertyName The name of the filtered object's property.
	 * @param {String} errorMessage The filtering error message.
	 */
	constructor( object, propertyName, errorMessage )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
		this.#_errorMessage = errorMessage;
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
	 * Gets the filtering error message.
	 * @returns {String} The filtering error message.
	 */
	get errorMessage()
	{
		return this.#_errorMessage;
	}
}
