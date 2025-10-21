'use strict';

import { AbstractFocusEvent } from './abstract-focus-event.js';

/**
 * Represents a focus event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusEvent extends AbstractFocusEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focus';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusEvent.EVENT_NAME, sender );
	}
}
