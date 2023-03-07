'use strict';

import { AbstractProgressEvent } from './AbstractProgressEvent.js';

/**
 * Represents an abort event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbortEvent extends AbstractProgressEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'abort';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( AbortEvent.EVENT_NAME, sender );
	}
}
