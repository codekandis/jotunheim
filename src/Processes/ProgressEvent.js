'use strict';

import { AbstractProgressEvent } from './AbstractProgressEvent.js';

/**
 * Represents a progress event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ProgressEvent extends AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'progress';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( ProgressEvent.EVENT_NAME, sender );
	}
}
