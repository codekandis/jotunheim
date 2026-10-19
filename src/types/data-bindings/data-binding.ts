'use strict';

import { Abstract } from '../abstract.js';
import { InvalidPropertyException } from '../invalid-property-exception.js';
import { DataBindingInitializationDirection } from './data-binding-initialization-direction.js';
import type { PropertyChangedEvent } from './property-changed-event.js';

/**
 * Represents a data binding.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DataBinding extends Abstract
{
	/**
	 * Stores the binder.
	 */
	#_binder: object;

	/**
	 * Stores the name of the binder's bound property.
	 */
	#_binderPropertyName: string;

	/**
	 * Stores the bindable.
	 */
	#_bindable: object;

	/**
	 * Stores the name of the bindable's bound property.
	 */
	#_bindablePropertyName: string;

	/**
	 * Stores the direction of the initial property update.
	 */
	#_initializiationDirection: DataBindingInitializationDirection;

	/**
	 * Stores true if the binder is locked against any property change event, otherwise false.
	 */
	#_isBinderPropertyChangeLocked = false;

	/**
	 * Stores true if the bindable is locked against any property change event, otherwise false.
	 */
	#_isBindablePropertyChangeLocked = false;

	/**
	 * Constructor method.
	 * @param binder The binder.
	 * @param binderPropertyName The name of the binder's bound property.
	 * @param bindable The bindable.
	 * @param bindablePropertyName The name of the bindable's bound property.
	 * @param initializationDirection The direction of the initial property update.
	 * @throws {InvalidPropertyException} The property of the binder does not exist.
	 * @throws {InvalidPropertyException} The property of the bindable does not exist.
	 */
	constructor( binder: object, binderPropertyName: string, bindable: object, bindablePropertyName: string, initializationDirection: DataBindingInitializationDirection = DataBindingInitializationDirection.BINDER )
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
	 * @returns The binder.
	 */
	get binder(): object
	{
		return this.#_binder;
	}

	/**
	 * Gets the name of the binder's bound property.
	 * @returns The name of the binder's bound property.
	 */
	get binderPropertyName(): string
	{
		return this.#_binderPropertyName;
	}

	/**
	 * Gets the bindable.
	 * @returns The bindable.
	 */
	get bindable(): object
	{
		return this.#_bindable;
	}

	/**
	 * Gets the name of the bindable's bound property.
	 * @returns The name of the bindable's bound property.
	 */
	get bindablePropertyName(): string
	{
		return this.#_bindablePropertyName;
	}

	/**
	 * Guards if all specified properties exist.
	 * @param binder The binder.
	 * @param binderPropertyName The name of the binder's bound property.
	 * @param bindable The bindable.
	 * @param bindablePropertyName The name of the bindable's bound property.
	 * @throws {InvalidPropertyException} The property of the binder does not exist.
	 * @throws {InvalidPropertyException} The property of the bindable does not exist.
	 */
	guard( binder: object, binderPropertyName: string, bindable: object, bindablePropertyName: string ): void
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
	#initialize(): void
	{
		this.#_binder.propertyChangedEvent.add( this.#binder_propertyChanged );
		this.#_bindable.propertyChangedEvent.add( this.#bindable_propertyChanged );

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
	#lockBinderPropertyChange(): void
	{
		this.#_isBinderPropertyChangeLocked = true;
	}

	/**
	 * Unlocks the binder from any property change event.
	 */
	#unlockBinderPropertyChange(): void
	{
		this.#_isBinderPropertyChangeLocked = false;
	}

	/**
	 * Locks the bindable against any property change event.
	 */
	#lockBindablePropertyChange(): void
	{
		this.#_isBindablePropertyChangeLocked = true;
	}

	/**
	 * Unlocks the bindable from any property change event.
	 */
	#unlockBindablePropertyChange(): void
	{
		this.#_isBindablePropertyChangeLocked = false;
	}

	/**
	 * Updates the binder's property.
	 */
	#updateBinderProperty(): void
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
	#updateBindableProperty(): void
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
	 * @param propertyChangedEvent The binder's dispatched property changed event.
	 */
	#binder_propertyChanged = ( propertyChangedEvent: PropertyChangedEvent ): void =>
	{
		if (
			this.#_binder !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_binderPropertyName !== propertyChangedEvent.detail.eventArguments.propertyName
		)
		{
			return;
		}

		this.#updateBindableProperty();
	};

	/**
	 * Will be invoked when the bindable's property changed event will be dispatched.
	 * @param propertyChangedEvent The bindable's dispatched property changed event.
	 */
	#bindable_propertyChanged = ( propertyChangedEvent: PropertyChangedEvent ): void =>
	{
		if (
			this.#_bindable !== propertyChangedEvent.detail.eventArguments.object
			|| this.#_bindablePropertyName !== propertyChangedEvent.detail.eventArguments.propertyName
		)
		{
			return;
		}

		this.#updateBinderProperty();
	};
}
