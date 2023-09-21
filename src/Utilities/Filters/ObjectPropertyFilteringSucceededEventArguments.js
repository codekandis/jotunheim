'use strict';

import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents the arguments of the object property filtering succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyFilteringSucceededEventArguments extends EventArguments
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
	 * Stores the filtered value.
	 * @type {*}
	 */
	#_filteredValue;

	/**
	 * Constructor method.
	 * @param {Object} object The filtered object.
	 * @param {String} propertyName The name of the filtered object's property.
	 * @param {*} filteredValue The filtered value.
	 */
	constructor( object, propertyName, filteredValue )
	{
		super();

		this.#_object        = object;
		this.#_propertyName  = propertyName;
		this.#_filteredValue = filteredValue;
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
	 * Gets the filtered value.
	 * @returns {*} The filtered value.
	 */
	get filteredValue()
	{
		return this.#_filteredValue;
	}
}
