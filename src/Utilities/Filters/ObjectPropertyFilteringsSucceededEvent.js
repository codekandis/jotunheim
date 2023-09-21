'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';

/**
 * Represents an object property filterings succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyFilteringsSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'objectPropertyFilteringsSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {ObjectPropertyFilteringsSucceededEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( ObjectPropertyFilteringsSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
