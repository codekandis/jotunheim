'use strict';

import { AbstractEvent } from '../types/abstract-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'cancel' as const;

/**
 * Represents a cancel event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CancelEvent extends AbstractEvent
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
		super( CancelEvent.EVENT_NAME, sender );
	}
}
