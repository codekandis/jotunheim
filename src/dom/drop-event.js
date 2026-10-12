'use strict';

import { AbstractDragEvent } from './abstract-drag-event.js';

/**
 * Represents a drop event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DropEvent extends AbstractDragEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'drop';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( DropEvent.EVENT_NAME, sender );
	}
}
