'use strict';

import { AbstractInputEvent } from './abstract-input-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'beforeinput' as const;

/**
 * Represents a before input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BeforeInputEvent extends AbstractInputEvent
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
		super( BeforeInputEvent.EVENT_NAME, sender );
	}
}
