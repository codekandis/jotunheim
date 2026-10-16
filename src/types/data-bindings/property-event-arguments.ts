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
	 */
	#_object: object;

	/**
	 * Stores the name of the affected property.
	 */
	#_propertyName: string;

	/**
	 * Constructor method.
	 * @param object The object whose property is affected.
	 * @param propertyName The name of the affected property.
	 */
	constructor( object: object, propertyName: string )
	{
		super();

		this.#_object       = object;
		this.#_propertyName = propertyName;
	}

	/**
	 * Gets the object whose property is affected.
	 * @returns The object whose property is affected.
	 */
	get object(): object
	{
		return this.#_object;
	}

	/**
	 * Gets the name of the affected property.
	 * @returns The name of the affected property.
	 */
	get propertyName(): string
	{
		return this.#_propertyName;
	}
}
