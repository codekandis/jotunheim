'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import type { ValidationsFailedEventArguments } from './validations-failed-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'validationsFailed' as const;

/**
 * Represents a validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationsFailedEvent extends AbstractCustomEvent<ValidationsFailedEventArguments>
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
	 * @param eventArguments The arguments of the event.
	 */
	constructor( sender: EventTarget, eventArguments: ValidationsFailedEventArguments )
	{
		super( ValidationsFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
