'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents a validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationsSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'validationsSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( sender )
	{
		super(
			ValidationsSucceededEvent.EVENT_NAME,
			sender,
			new EventArguments()
		);
	}
}
