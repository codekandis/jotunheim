'use strict';

import { AbstractDragEvent } from './abstract-drag-event.js';

/**
 * Represents a drag event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragEvent extends AbstractDragEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'drag';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragEvent.EVENT_NAME, sender );
	}
}
