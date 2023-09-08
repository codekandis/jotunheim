'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';

/**
 * Represents an object property validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationsFailedEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'objectPropertyValidationsFailed';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {ObjectPropertyValidationsFailedEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( ObjectPropertyValidationsFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
