'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';
import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents a validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'validationSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( sender )
	{
		super(
			ValidationSucceededEvent.EVENT_NAME,
			sender,
			new EventArguments()
		);
	}
}
