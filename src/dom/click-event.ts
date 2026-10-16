'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'click' as const;

/**
 * Represents a click event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ClickEvent extends AbstractMouseEvent
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
		super( ClickEvent.EVENT_NAME, sender );
	}
}
