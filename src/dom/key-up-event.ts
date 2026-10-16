'use strict';

import { AbstractKeyboardEvent } from './abstract-keyboard-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'keyup' as const;

/**
 * Represents a key up event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class KeyUpEvent extends AbstractKeyboardEvent
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
		super( KeyUpEvent.EVENT_NAME, sender );
	}
}
