'use strict';

import { AbstractCustomEvent } from '../abstract-custom-event.js';

/**
 * Represents a property changing event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class PropertyChangingEvent extends AbstractCustomEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'propertyChanging';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object dispatching this event.
	 * @param {PropertyEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( PropertyChangingEvent.EVENT_NAME, sender, eventArguments );
	}
}
