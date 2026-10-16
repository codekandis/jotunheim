'use strict';

import { AbstractEvent } from '../types/abstract-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'input' as const;

/**
 * Represents an input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InputEvent extends AbstractEvent
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
		super( InputEvent.EVENT_NAME, sender );
	}
}
