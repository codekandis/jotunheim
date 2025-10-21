'use strict';

import { AbstractDragEvent } from './abstract-drag-event.js';

/**
 * Represents a drag end event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragEndEvent extends AbstractDragEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragend';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragEndEvent.EVENT_NAME, sender );
	}
}
