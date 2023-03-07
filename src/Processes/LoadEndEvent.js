'use strict';

import { AbstractProgressEvent } from './AbstractProgressEvent.js';

/**
 * Represents a load end event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LoadEndEvent extends AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'loadend';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( LoadEndEvent.EVENT_NAME, sender );
	}
}
