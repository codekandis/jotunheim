'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Represents a load event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LoadEvent extends AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'load';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( LoadEvent.EVENT_NAME, sender );
	}
}
