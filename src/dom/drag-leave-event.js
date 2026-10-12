'use strict';

import { AbstractDragEvent } from './abstract-drag-event.js';

/**
 * Represents a drag leave event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DragLeaveEvent extends AbstractDragEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'dragleave';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DragLeaveEvent.EVENT_NAME, sender );
	}
}
