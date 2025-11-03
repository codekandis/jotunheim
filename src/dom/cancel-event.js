'use strict';

import { AbstractEvent } from '../types/abstract-event.js';

/**
 * Represents a cancel event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CancelEvent extends AbstractEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'cancel';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( CancelEvent.EVENT_NAME, sender );
	}
}
