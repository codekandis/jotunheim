'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import type { ValidationFailedEventArguments } from './validation-failed-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'validationFailed' as const;

/**
 * Represents a validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidationFailedEvent extends AbstractCustomEvent<ValidationFailedEventArguments>
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
	constructor( sender: EventTarget, eventArguments: ValidationFailedEventArguments )
	{
		super( ValidationFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
