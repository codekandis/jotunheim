'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Represents a mouse up event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseUpEvent extends AbstractMouseEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseup';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseUpEvent.EVENT_NAME, sender );
	}
}
