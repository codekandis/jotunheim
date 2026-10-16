'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'loadend' as const;

/**
 * Represents a load end event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LoadEndEvent extends AbstractProgressEvent
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
		super( LoadEndEvent.EVENT_NAME, sender );
	}
}
