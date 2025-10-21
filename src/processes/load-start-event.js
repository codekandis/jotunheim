'use strict';

import { AbstractProgressEvent } from './abstract-progress-event.js';

/**
 * Represents a load start event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class LoadStartEvent extends AbstractProgressEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'loadstart';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( LoadStartEvent.EVENT_NAME, sender );
	}
}
