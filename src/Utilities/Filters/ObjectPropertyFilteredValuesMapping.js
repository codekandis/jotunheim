'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents a mapping of a validated object property and filtered values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyFilteredValuesMapping extends Abstract
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
	 * Stores the filtered values.
	 * @type {Collection<*>}
	 */
	#_filteredValues;

	/**
	 * Constructor method.
	 * @param {Object} object The validated object.
	 * @param {String} propertyName The name of the validated object's property.
	 * @param {Collection<*>} filteredValues The filtered values.
	 */
	constructor( object, propertyName, filteredValues )
	{
		super();

		this.#_object         = object;
		this.#_propertyName   = propertyName;
		this.#_filteredValues = filteredValues;
	}

	/**
	 * Stores the validated object.
	 * @returns {Object} The validated object.
	 */
	get object()
	{
		return this.#_object;
	}

	/**
	 * Stores the name of the validated object's property.
	 * @returns {String} The name of the validated object's property.
	 */
	get propertyName()
	{
		return this.#_propertyName;
	}

	/**
	 * Gets the filtered values.
	 * @returns {Collection<*>} The filtered values.
	 */
	get filteredValues()
	{
		return this.#_filteredValues;
	}
}
