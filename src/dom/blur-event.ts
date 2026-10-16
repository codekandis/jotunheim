'use strict';

import { AbstractFocusEvent } from './abstract-focus-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'blur' as const;

/**
 * Represents a blur event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BlurEvent extends AbstractFocusEvent
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
		super( BlurEvent.EVENT_NAME, sender );
	}
}
