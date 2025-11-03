'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents a validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'validationSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object which dispatched the event.
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
