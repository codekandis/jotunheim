'use strict';

import { AbstractFocusEvent } from './abstract-focus-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'focus' as const;

/**
 * Represents a focus event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusEvent extends AbstractFocusEvent
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
		super( FocusEvent.EVENT_NAME, sender );
	}
}
