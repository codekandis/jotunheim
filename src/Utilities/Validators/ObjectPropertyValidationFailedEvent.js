'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';

/**
 * Represents an object property validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationFailedEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'objectPropertyValidationFailed';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {ObjectPropertyValidationFailedEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( ObjectPropertyValidationFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
