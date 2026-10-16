'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'error' as const;

/**
 * Represents an error event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ErrorEvent extends AbstractProgressEvent
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
		super( ErrorEvent.EVENT_NAME, sender );
	}
}
