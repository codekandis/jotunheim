'use strict';

import { AbstractKeyboardEvent } from './abstract-keyboard-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'keydown' as const;

/**
 * Represents a key down event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class KeyDownEvent extends AbstractKeyboardEvent
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
		super( KeyDownEvent.EVENT_NAME, sender );
	}
}
