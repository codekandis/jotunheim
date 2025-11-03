'use strict';

import { AbstractFocusEvent } from './abstract-focus-event.js';

/**
 * Represents a focus out event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FocusOutEvent extends AbstractFocusEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'focusout';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( FocusOutEvent.EVENT_NAME, sender );
	}
}
