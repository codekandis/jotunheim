'use strict';

import { AbstractProgressEvent } from './AbstractProgressEvent.js';

/**
 * Represents an error event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ErrorEvent extends AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'error';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ErrorEvent.EVENT_NAME, sender );
	}
}
