'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import type { HtmlElementValidationsFailedEventArguments } from './html-element-validations-failed-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'htmlElementValidationsFailed' as const;

/**
 * Represents an HTML element validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsFailedEvent extends AbstractCustomEvent<HtmlElementValidationsFailedEventArguments>
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
	constructor( sender: EventTarget, eventArguments: HtmlElementValidationsFailedEventArguments )
	{
		super( HtmlElementValidationsFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
