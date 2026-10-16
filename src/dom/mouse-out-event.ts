'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'mouseout' as const;

/**
 * Represents a mouse out event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseOutEvent extends AbstractMouseEvent
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
		super( MouseOutEvent.EVENT_NAME, sender );
	}
}
