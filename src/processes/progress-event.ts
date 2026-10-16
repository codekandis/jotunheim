'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'progress' as const;

/**
 * Represents a progress event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ProgressEvent extends AbstractProgressEvent
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
		super( ProgressEvent.EVENT_NAME, sender );
	}
}
