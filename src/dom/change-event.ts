'use strict';

import { AbstractEvent } from '../types/abstract-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'change' as const;

/**
 * Represents a change event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ChangeEvent extends AbstractEvent
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
		super( ChangeEvent.EVENT_NAME, sender );
	}
}
