'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Represents a mouse leave event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseLeaveEvent extends AbstractMouseEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseleave';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseLeaveEvent.EVENT_NAME, sender );
	}
}
