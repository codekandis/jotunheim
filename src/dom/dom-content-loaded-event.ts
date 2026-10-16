'use strict';

import { AbstractEvent } from '../types/abstract-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'DOMContentLoaded' as const;

/**
 * Represents a DOM content loaded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomContentLoadedEvent extends AbstractEvent
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
		super( DomContentLoadedEvent.EVENT_NAME, sender );
	}
}
