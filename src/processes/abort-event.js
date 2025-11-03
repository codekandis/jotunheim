'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Represents an abort event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbortEvent extends AbstractProgressEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'abort';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( AbortEvent.EVENT_NAME, sender );
	}
}
