'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'mouseup' as const;

/**
 * Represents a mouse up event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseUpEvent extends AbstractMouseEvent
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
		super( MouseUpEvent.EVENT_NAME, sender );
	}
}
