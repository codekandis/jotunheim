'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import { EventArguments } from '../../types/event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'validationsSucceeded' as const;

/**
 * Represents a validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationsSucceededEvent extends AbstractCustomEvent<EventArguments>
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
			ValidationsSucceededEvent.EVENT_NAME,
			sender,
			new EventArguments()
		);
	}
}
