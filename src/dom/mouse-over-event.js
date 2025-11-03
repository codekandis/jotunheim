'use strict';

import { AbstractMouseEvent } from './abstract-mouse-event.js';

/**
 * Represents a mouse over event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MouseOverEvent extends AbstractMouseEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'mouseover';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( MouseOverEvent.EVENT_NAME, sender );
	}
}
