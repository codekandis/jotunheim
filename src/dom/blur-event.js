'use strict';

import { AbstractFocusEvent } from './abstract-focus-event.js';

/**
 * Represents a blur event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class BlurEvent extends AbstractFocusEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'blur';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 */
	constructor( sender )
	{
		super( BlurEvent.EVENT_NAME, sender );
	}
}
