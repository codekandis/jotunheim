'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';

/**
 * Represents an HTML element validation succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'htmFormElementValidationSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {object} sender The object which dispatched the event.
	 * @param {HtmlElementValidationSucceededEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( HtmlElementValidationSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
