'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';

/**
 * Represents an object property validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'objectPropertyValidationSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {ObjectPropertyValidationSucceededEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( ObjectPropertyValidationSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
