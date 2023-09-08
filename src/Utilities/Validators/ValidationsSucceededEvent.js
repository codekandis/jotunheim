'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';
import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents a validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationsSucceededEvent extends AbstractCustomEvent
{
	/**
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
