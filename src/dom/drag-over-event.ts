'use strict';

import { AbstractDragEvent } from './abstract-drag-event.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'dragover' as const;

/**
 * Represents a drag over event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragOverEvent extends AbstractDragEvent
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
		super( DragOverEvent.EVENT_NAME, sender );
	}
}
