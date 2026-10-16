'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import type { HtmlElementValidationsSucceededEventArguments } from './html-element-validations-succeeded-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'htmFormElementValidationsSucceeded' as const;

/**
 * Represents an HTML element validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsSucceededEvent extends AbstractCustomEvent<HtmlElementValidationsSucceededEventArguments>
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
	constructor( sender: EventTarget, eventArguments: HtmlElementValidationsSucceededEventArguments )
	{
		super( HtmlElementValidationsSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
