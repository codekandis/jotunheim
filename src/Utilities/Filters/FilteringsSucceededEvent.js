'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';
import { EventArguments } from '../../Types/EventArguments.js';

/**
 * Represents a filterings succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FilteringsSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'filteringsSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( sender )
	{
		super(
			FilteringsSucceededEvent.EVENT_NAME,
			sender,
			new EventArguments()
		);
	}
}
