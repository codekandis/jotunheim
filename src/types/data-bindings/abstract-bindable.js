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
export class AbstractBindable extends Abstract
{
	/**
	 * Stores the data bindings of the bindable.
	 * @type {DataBindings}
	 */
	#_dataBindings;

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
	 * @returns {DataBindings} The data bindings of the bindable.
	 */
	get dataBindings()
	{
		return this.#_dataBindings;
	}

	/**
	 * Gets the property changing event.
	 * @returns {EventManager_Event}
	 */
	get propertyChangingEvent()
	{
		return new EventManager( PropertyChangingEvent, this );
	}

	/**
	 * Gets the property changed event.
	 * @returns {EventManager_Event}
	 */
	get propertyChangedEvent()
	{
		return new EventManager( PropertyChangedEvent, this );
	}

	/**
	 * Invokes the property changing event for a property specified by its name.
	 * @param {string} propertyName The name of the property.
	 * @param {AbstractBindable} proxy The bindable object containing the property.
	 */
	_dispatchPropertyChangingEvent( propertyName, proxy = this )
	{
		this.propertyChangingEvent.dispatch(
			new PropertyEventArguments( proxy, propertyName )
		);
	}

	/**
	 * Invokes the property changed event for a property specified by its name.
	 * @param {string} propertyName The name of the property.
	 * @param {AbstractBindable} proxy The bindable object containing the property.
	 */
	_dispatchPropertyChangedEvent( propertyName, proxy = this )
	{
		this.propertyChangedEvent.dispatch(
			new PropertyEventArguments( proxy, propertyName )
		);
	}
}
