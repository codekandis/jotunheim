'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';

/**
 * Represents an object property validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidationsSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'objectPropertyValidationsSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {ObjectPropertyValidationsSucceededEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( ObjectPropertyValidationsSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
