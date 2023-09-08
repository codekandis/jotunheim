'use strict';

import { Abstract } from '../../Types/Abstract.js';

/**
 * Represents a mapping of a validated object property.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyMapping extends Abstract
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
	 * Constructor method.
	 * @param {Object} object The validated object.
	 * @param {String} propertyName The name of the validated object's property.
	 */
	constructor( object, propertyName )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
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
}
