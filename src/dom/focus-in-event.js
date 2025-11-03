'use strict';

import { AbstractFocusEvent } from './abstract-focus-event.js';

/**
 * Represents a focus in event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusInEvent extends AbstractFocusEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focusin';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusInEvent.EVENT_NAME, sender );
	}
}
