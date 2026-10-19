'use strict';

import { Abstract } from '../abstract.js';
import { EventManager } from '../event-manager.js';
import { DataBindings } from './data-bindings.js';
import { PropertyChangedEvent } from './property-changed-event.js';
import { PropertyChangingEvent } from './property-changing-event.js';
import { PropertyEventArguments } from './property-event-arguments.js';

/**
 * Represents the base class of any bindable.
 * @author Christian Ramelow <info@codekandis.net>
 */
export abstract class AbstractBindable extends Abstract
{
	/**
	 * Stores the data bindings of the bindable.
	 */
	#_dataBindings: DataBindings;

	/**
	 * Constructor method.
	 */
	constructor()
	{
		super();

		this.#_dataBindings = new DataBindings( this );
	}

	/**
	 * Gets the data bindings of the bindable.
	 * @returns The data bindings of the bindable.
	 */
	get dataBindings(): DataBindings
	{
		return this.#_dataBindings;
	}

	/**
	 * Gets the property changing event.
	 * @returns The property changing event manager.
	 */
	get propertyChangingEvent(): EventManager<typeof PropertyChangingEvent>
	{
		return new EventManager<typeof PropertyChangingEvent>( PropertyChangingEvent, this );
	}

	/**
	 * Gets the property changed event.
	 * @returns The property changed event manager.
	 */
	get propertyChangedEvent(): EventManager<typeof PropertyChangedEvent>
	{
		return new EventManager<typeof PropertyChangedEvent>( PropertyChangedEvent, this );
	}

	/**
	 * Invokes the property changing event for a property specified by its name.
	 * @param propertyName The name of the property.
	 * @param proxy The bindable object containing the property.
	 */
	_dispatchPropertyChangingEvent( propertyName: string, proxy: AbstractBindable = this ): void
	{
		this.propertyChangingEvent.dispatch(
			new PropertyEventArguments( proxy, propertyName )
		);
	}

	/**
	 * Invokes the property changed event for a property specified by its name.
	 * @param propertyName The name of the property.
	 * @param proxy The bindable object containing the property.
	 */
	_dispatchPropertyChangedEvent( propertyName: string, proxy: AbstractBindable = this ): void
	{
		this.propertyChangedEvent.dispatch(
			new PropertyEventArguments( proxy, propertyName )
		);
	}
}
