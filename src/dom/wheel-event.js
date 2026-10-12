'use strict';

import { AbstractWheelEvent } from './abstract-wheel-event.js';

/**
 * Represents a wheel event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class WheelEvent extends AbstractWheelEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'wheel';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( WheelEvent.EVENT_NAME, sender );
	}
}
