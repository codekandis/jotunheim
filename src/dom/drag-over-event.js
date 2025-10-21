'use strict';

import { AbstractDragEvent } from './abstract-drag-event.js';

/**
 * Represents a drag over event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragOverEvent extends AbstractDragEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragover';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragOverEvent.EVENT_NAME, sender );
	}
}
