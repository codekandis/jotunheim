'use strict';

import { Collection } from '../../Collections/Collection.js';
import { Abstract } from '../Abstract.js';
import { DataBinding } from './DataBinding.js';
import { DataBindingInitializationDirection } from './DataBindingInitializationDirection.js';

/**
 * Represents a collection of data bindings of any bindable.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DataBindings extends Abstract
{
	/**
	 * Stores the object whose properties will be bound.
	 * @type {Object}
	 */
	#_binder;

	/**
	 * Stores the internal list of data bindings.
	 * @type {Collection<DataBinding>}
	 */
	#_bindings = new Collection();

	/**
	 * Constructor method.
	 * @param {Object} binder The object whose properties will be bound.
	 */
	constructor( binder )
	{
		super();

		this.#_binder = binder;
	}

	/**
	 * Adds a data binding.
	 * @param {String} propertyName The name of the binder's property.
	 * @param {Object} bindable The object whose property will be bound to the binder's property.
	 * @param {String} bindablePropertyName The name of the property which will be bound to the binder's property.
	 * @param {String} initializationDirection The direction of the initial property update.
	 * @param {?AbstractFilter} binderFilter The filter used to filter data from the binder's bound property to the bindable's bound property.
	 * @param {?AbstractFilter} bindableFilter The filter used to filter data from the bindable's bound property to the binder's bound property.
	 * */
	add( propertyName, bindable, bindablePropertyName, initializationDirection = DataBindingInitializationDirection.BINDER, binderFilter = null, bindableFilter = null )
	{
		this.#_bindings.add(
			new DataBinding( this.#_binder, propertyName, bindable, bindablePropertyName, initializationDirection, binderFilter, bindableFilter )
		);
	}

	/**
	 * Removes and detaches a data binding.
	 * @param {String} propertyName The name of the binder's property.
	 * @param {Object} bindable The object whose property has been bound to the binder's property.
	 * @param {String} bindablePropertyName The name of the property which has been bound to the binder's property.
	 */
	remove( propertyName, bindable, bindablePropertyName )
	{
		this.#_bindings.removeBy(
			( fetchedDataBinding ) =>
			{
				const isValid = fetchedDataBinding.binderPropertyName === propertyName && fetchedDataBinding.bindable === bindable && fetchedDataBinding.bindablePropertyName === bindablePropertyName;
				if ( true === isValid )
				{
					fetchedDataBinding.detach();
				}

				return isValid;
			}
		);
	}
}
