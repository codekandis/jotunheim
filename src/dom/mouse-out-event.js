'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Represents a mouse out event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseOutEvent extends AbstractMouseEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseout';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseOutEvent.EVENT_NAME, sender );
	}
}
