'use strict';

import { AbstractStatic } from '../types/abstract-static.js';
import type { EventHandler } from '../types/event-handler.js';

/**
 * Represents a DOM document wrapper.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomDocument extends AbstractStatic
{
	/**
	 * Adds an event handler to the DOM content loaded event of the document.
	 * @param eventHandler The event handler to add.
	 */
	static load( eventHandler: EventHandler ): void
	{
		document.domContentLoadedEvent.add( eventHandler );
	}
}
