'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';

/**
 * Represents an HTML element validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsSucceededEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'htmFormElementValidationsSucceeded';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {HtmlElementValidationsSucceededEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( HtmlElementValidationsSucceededEvent.EVENT_NAME, sender, eventArguments );
	}
}
