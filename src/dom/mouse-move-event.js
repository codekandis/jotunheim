'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Represents a mouse move event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseMoveEvent extends AbstractMouseEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mousemove';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseMoveEvent.EVENT_NAME, sender );
	}
}
