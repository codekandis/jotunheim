'use strict';

import { AbstractCustomEvent } from '../../Types/AbstractCustomEvent.js';

/**
 * Represents an HTML element validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsFailedEvent extends AbstractCustomEvent
{
	/**
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'htmlElementValidationsFailed';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {HtmlElementValidationsFailedEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( HtmlElementValidationsFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
