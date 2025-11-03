'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Represents an error event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ErrorEvent extends AbstractProgressEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'error';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ErrorEvent.EVENT_NAME, sender );
	}
}
