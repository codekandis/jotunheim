'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'loadstart' as const;

/**
 * Represents a load start event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LoadStartEvent extends AbstractProgressEvent
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
		super( LoadStartEvent.EVENT_NAME, sender );
	}
}
