'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import { EventArguments } from '../../types/event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'validationSucceeded' as const;

/**
 * Represents a validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationSucceededEvent extends AbstractCustomEvent<EventArguments>
{
	/**
	 * @inheritdoc
	 */
	static override get EVENT_NAME(): typeof EVENT_NAME
	{
		return EVENT_NAME;
	}

	/**
	 * Constructor method.
	 * @param sender The object which dispatched the event.
	 */
	constructor( sender: EventTarget )
	{
		super(
			ValidationSucceededEvent.EVENT_NAME,
			sender,
			new EventArguments()
		);
	}
}
