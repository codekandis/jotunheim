'use strict';

import { AbstractWheelEvent } from './AbstractWheelEvent.js';

/**
 * Represents a wheel event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class WheelEvent extends AbstractWheelEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'wheel';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( WheelEvent.EVENT_NAME, sender );
	}
}
