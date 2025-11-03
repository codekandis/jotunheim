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
	 * @type {object}
	 */
	#_binder;

	/**
	 * Stores the internal list of data bindings.
	 * @type {Array}
	 */
	#_bindings = [];

	/**
	 * Constructor method.
	 * @param {object} binder The object whose properties will be bound.
	 */
	constructor( binder )
	{
		super();

		this.#_binder = binder;
	}

	/**
	 * Adds a data binding.
	 * @param {string} propertyName The name of the binder's property.
	 * @param {object} bindable The object whose property will be bound to the binder.
	 * @param {string} bindablePropertyName The name of the property which will be bound to the binder.
	 * @param {string} initializationDirection The direction of the initial property update.
	 */
	add( propertyName, bindable, bindablePropertyName, initializationDirection = DataBindingInitializationDirection.BINDER )
	{
		this.#_bindings.add(
			new DataBinding( this.#_binder, propertyName, bindable, bindablePropertyName, initializationDirection )
		);
	}
}
