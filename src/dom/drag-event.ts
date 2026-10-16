'use strict';

import { AbstractDragEvent } from './abstract-drag-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'drag' as const;

/**
 * Represents a drag event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragEvent extends AbstractDragEvent
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
		super( DragEvent.EVENT_NAME, sender );
	}
}
