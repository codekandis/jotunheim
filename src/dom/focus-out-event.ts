'use strict';

import { AbstractFocusEvent } from './abstract-focus-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'focusout' as const;

/**
 * Represents a focus out event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusOutEvent extends AbstractFocusEvent
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
		super( FocusOutEvent.EVENT_NAME, sender );
	}
}
