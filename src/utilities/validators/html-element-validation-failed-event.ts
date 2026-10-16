'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import type { HtmlElementValidationFailedEventArguments } from './html-element-validation-failed-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'htmlElementValidationFailed' as const;

/**
 * Represents an HTML element validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationFailedEvent extends AbstractCustomEvent<HtmlElementValidationFailedEventArguments>
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
	constructor( sender: EventTarget, eventArguments: HtmlElementValidationFailedEventArguments )
	{
		super( HtmlElementValidationFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
