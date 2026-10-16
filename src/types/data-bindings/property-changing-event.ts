'use strict';

import { AbstractCustomEvent } from '../abstract-custom-event.js';
import type { PropertyEventArguments } from './property-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'propertyChanging' as const;

/**
 * Represents a property changing event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyChangingEvent extends AbstractCustomEvent<PropertyEventArguments>
{
	/**
	 * @inheritdoc
	 */
	static override get EVENT_NAME(): typeof EVENT_NAME
	{
		return EVENT_NAME;
	}

	/**
	 * Constructor method.
	 * @param sender The object dispatching this event.
	 * @param eventArguments The arguments of the event.
	 */
	constructor( sender: EventTarget, eventArguments: PropertyEventArguments )
	{
		super( PropertyChangingEvent.EVENT_NAME, sender, eventArguments );
	}
}
