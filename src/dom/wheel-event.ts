'use strict';

import { AbstractWheelEvent } from './abstract-wheel-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'wheel' as const;

/**
 * Represents a wheel event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class WheelEvent extends AbstractWheelEvent
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
	 */
	constructor( sender: EventTarget )
	{
		super( WheelEvent.EVENT_NAME, sender );
	}
}
