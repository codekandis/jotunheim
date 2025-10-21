'use strict';

import { AbstractCustomEvent } from '../../types/abstract-custom-event.js';

/**
 * Represents an HTML element validation failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationFailedEvent extends AbstractCustomEvent
{
	/**
	 * @override
	 * @inheritdoc
	 */
	static get EVENT_NAME()
	{
		return 'htmlElementValidationFailed';
	}

	/**
	 * Constructor method.
	 * @param {Object} sender The object which dispatched the event.
	 * @param {HtmlElementValidationFailedEventArguments} eventArguments The arguments of the event.
	 */
	constructor( sender, eventArguments )
	{
		super( HtmlElementValidationFailedEvent.EVENT_NAME, sender, eventArguments );
	}
}
