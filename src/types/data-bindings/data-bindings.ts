'use strict';

import { Abstract } from '../abstract.js';
import { DataBindingInitializationDirection } from './data-binding-initialization-direction.js';
import { DataBinding } from './data-binding.js';

/**
 * Represents a collection of data bindings of any bindable.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DataBindings extends Abstract
{
	/**
	 * Stores the object whose properties will be bound.
	 */
	#_binder: object;

	/**
	 * Stores the internal list of data bindings.
	 */
	#_bindings: DataBinding[] = [];

	/**
	 * Constructor method.
	 * @param binder The object whose properties will be bound.
	 */
	constructor( binder: object )
	{
		super();

		this.#_binder = binder;
	}

	/**
	 * Adds a data binding.
	 * @param propertyName The name of the binder's property.
	 * @param bindable The object whose property will be bound to the binder.
	 * @param bindablePropertyName The name of the property which will be bound to the binder.
	 * @param initializationDirection The direction of the initial property update.
	 */
	add( propertyName: string, bindable: object, bindablePropertyName: string, initializationDirection: DataBindingInitializationDirection = DataBindingInitializationDirection.BINDER ): void
	{
		this.#_bindings.add(
			new DataBinding( this.#_binder, propertyName, bindable, bindablePropertyName, initializationDirection )
		);
	}
}
