'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';
import type { HtmlElementValidationSucceededEventArguments } from './html-element-validation-succeeded-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'htmFormElementValidationSucceeded' as const;

/**
 * Represents an HTML element validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationSucceededEvent extends AbstractCustomEvent<HtmlElementValidationSucceededEventArguments>
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
	constructor( sender: EventTarget, eventArguments: HtmlElementValidationSucceededEventArguments )
	{
		super( HtmlElementValidationSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
