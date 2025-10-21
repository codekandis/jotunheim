'use strict';

import { AbstractInputEvent } from './abstract-input-event.js';

/**
 * Represents a before input event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BeforeInputEvent extends AbstractInputEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'beforeinput';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( BeforeInputEvent.EVENT_NAME, sender );
	}
}
