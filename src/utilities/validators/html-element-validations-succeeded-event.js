'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';

/**
 * Represents an HTML element validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'htmFormElementValidationsSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object which dispatched the event.
	 * @param {HtmlElementValidationsSucceededEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( HtmlElementValidationsSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
