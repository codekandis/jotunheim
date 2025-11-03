'use strict';

import { EventArguments } from './event-arguments.js';
import { EventDetails } from './event-details.js';

/**
 * Represents the default event details.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DefaultEventDetails extends EventDetails
{
	/**
	 * Constructor method.
	 * @param {object} sender The object which dispatched the event.
	 */
	constructor( sender )
	{
		super( sender, new EventArguments() );
	}
}
