'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';

/**
 * Represents a validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationsFailedEvent extends AbstractCustomEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'validationsFailed';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object which dispatched the event.
	 * @param {ValidationsFailedEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( ValidationsFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
