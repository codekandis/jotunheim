'use strict';

import { Abstract } from '../abstract.js';
import { InvalidPropertyException } from '../invalid-property-exception.js';
import { DataBindingInitializationDirection } from './data-binding-initialization-direction.js';
import { PropertyChangedEvent } from './property-changed-event.js';

/**
 * Represents a data binding.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DataBinding extends Abstract
{
	/**
	 * Stores the binder.
	 * @type {object}
	 */
	#_binder;

	/**
	 * Stores the name of the binder's bound property.
	 * @type {string}
	 */
	#_binderPropertyName;

	/**
	 * Stores the bindable.
	 * @type {object}
	 */
	#_bindable;

	/**
	 * Stores the name of the bindable's bound property.
	 * @type {string}
	 */
	#_bindablePropertyName;

	/**
	 * Stores the direction of the initial property update.
	 * @type {string}
	 */
	#_initializiationDirection;

	/**
	 * Stores true if the binder is locked against any property change event, otherwise false.
	 * @type {boolean}
	 */
	#_isBinderPropertyChangeLocked = false;

	/**
	 * Stores true if the bindable is locked against any property change event, otherwise false.
	 * @type {boolean}
	 */
	#_isBindablePropertyChangeLocked = false;

	/**
	 * Constructor method.
	 * @param {object} binder The binder.
	 * @param {string} binderPropertyName The name of the binder's bound property.
	 * @param {object} bindable The bindable.
	 * @param {string} bindablePropertyName The name of the bindable's bound property.
	 * @param {string} initializationDirection The direction of the initial property update.
	 * @throws {InvalidPropertyException} The property of the binder does not exist.
	 * @throws {InvalidPropertyException} The property of the bindable does not exist.
	 */
	constructor( binder, binderPropertyName, bindable, bindablePropertyName, initializationDirection = DataBindingInitializationDirection.BINDER )
	{
		super();

		this.guard( binder, binderPropertyName, bindable, bindablePropertyName );

		this.#_binder                   = binder;
		this.#_binderPropertyName       = binderPropertyName;
		this.#_bindable                 = bindable;
		this.#_bindablePropertyName     = bindablePropertyName;
		this.#_initializiationDirection = initializationDirection;

		this.#initialize();
	}

	/**
	 * Gets the binder.
	 * @returns {object} The binder.
	 */
	get binder()
	{
		return this.#_binder;
	}

	/**
	 * Gets the name of the binder's bound property.
	 * @returns {string} The name of the binder's bound property.
	 */
	get binderPropertyName()
	{
		return this.#_binderPropertyName;
	}

	/**
	 * Gets the bindable.
	 * @returns {object} The bindable.
	 */
	get bindable()
	{
		return this.#_bindable;
	}

	/**
	 * Gets the name of the bindable's bound property.
	 * @returns {string} The name of the bindable's bound property.
	 */
	get bindablePropertyName()
	{
		return this.#_bindablePropertyName;
	}

	/**
	 * Guards if all specified properties exist.
	 * @param {object} binder The binder.
	 * @param {string} binderPropertyName The name of the binder's bound property.
	 * @param {object} bindable The bindable.
	 * @param {string} bindablePropertyName The name of the bindable's bound property.
	 * @throws {InvalidPropertyException} The property of the binder does not exist.
	 * @throws {InvalidPropertyException} The property of the bindable does not exist.
	 */
	guard( binder, binderPropertyName, bindable, bindablePropertyName )
	{
		if ( false === binder.hasProperty( binderPropertyName ) )
		{
			throw InvalidPropertyException.with_property( binderPropertyName );
		}

		if ( false === bindable.hasProperty( bindablePropertyName ) )
		{
			throw InvalidPropertyException.with_property( bindablePropertyName );
		}
	}

	/**
	 * Initializes the data binding.
	 */
	#initialize()
	{
		this.#_binder.propertyChangedEvent( this.#binder_propertyChanged );
		this.#_bindable.propertyChangedEvent( this.#bindable_propertyChanged );

		switch ( this.#_initializiationDirection )
		{
			case DataBindingInitializationDirection.BINDER:
			{
				this.#updateBindableProperty();

				break;
			}
			case DataBindingInitializationDirection.BINDABLE:
			{
				this.#updateBinderProperty();

				break;
			}
		}
	}

	/**
	 * Locks the binder against any property change event.
	 */
	#lockBinderPropertyChange()
	{
		this.#_isBinderPropertyChangeLocked = true;
	}

	/**
	 * Unlocks the binder from any property change event.
	 */
	#unlockBinderPropertyChange()
	{
		this.#_isBinderPropertyChangeLocked = false;
	}

	/**
	 * Locks the bindable against any property change event.
	 */
	#lockBindablePropertyChange()
	{
		this.#_isBindablePropertyChangeLocked = true;
	}

	/**
	 * Unlocks the bindable from any property change event.
	 */
	#unlockBindablePropertyChange()
	{
		this.#_isBindablePropertyChangeLocked = false;
	}

	/**
	 * Updates the binder's property.
	 */
	#updateBinderProperty()
	{
		if ( true === this.#_isBinderPropertyChangeLocked )
		{
			return;
		}

		this.#lockBindablePropertyChange();

		this.#_binder[ this.#_binderPropertyName ] = this.#_bindable[ this.#_bindablePropertyName ];

		this.#unlockBindablePropertyChange();
	}

	/**
	 * Updates the bindable's property.
	 */
	#updateBindableProperty()
	{
		if ( true === this.#_isBindablePropertyChangeLocked )
		{
			return;
		}

		this.#lockBinderPropertyChange();

		this.#_bindable[ this.#_bindablePropertyName ] = this.#_binder[ this.#_binderPropertyName ];

		this.#unlockBinderPropertyChange();
	}

	/**
	 * Will be invoked when the binder's property changed event will be dispatched.
	 * @param {PropertyChangedEvent} propertyChangedEvent The binder's dispatched property changed event.
	 * @param {PropertyEventArguments} propertyChangedEvent.detail.eventArguments
	 */
	#binder_propertyChanged = ( propertyChangedEvent ) =>
	{
		if (
			this.#_binder !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_binderPropertyName !== propertyChangedEvent.detail.eventArguments.propertyName
		)
		{
			return;
		}

		this.#updateBindableProperty();
	}

	/**
	 * Will be invoked when the bindable's property changed event will be dispatched.
	 * @param {PropertyChangedEvent} propertyChangedEvent The bindable's dispatched property changed event.
	 * @param {PropertyEventArguments} propertyChangedEvent.detail.eventArguments
	 */
	#bindable_propertyChanged = ( propertyChangedEvent ) =>
	{
		if (
			this.#_bindable !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_bindablePropertyName !== propertyChangedEvent.detail.eventArguments.propertyName
		)
		{
			return;
		}

		this.#updateBinderProperty();
	}
}
