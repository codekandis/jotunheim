'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Represents a load end event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LoadEndEvent extends AbstractProgressEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'loadend';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( LoadEndEvent.EVENT_NAME, sender );
	}
}
