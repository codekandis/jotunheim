'use strict';

import { AbstractEvent } from '../types/abstract-event.js';

/**
 * Represents an input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InputEvent extends AbstractEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'input';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( InputEvent.EVENT_NAME, sender );
	}
}
