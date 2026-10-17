'use strict';

/**
 * Represents prototype extensions and types of the class `Document`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../types/event-manager.js';
import { DomContentLoadedEvent } from './dom-content-loaded-event.js';

declare global
{
	/**
	 * Represents extensions of the DOM document.
	 */
	interface Document
	{
		/**
		 * Gets the DOM content loaded event.
		 * @returns The DOM content loaded event manager.
		 */
		readonly domContentLoadedEvent: EventManager<typeof DomContentLoadedEvent>;
	}
}

Object.defineProperty(
	Document.prototype,
	'domContentLoadedEvent',
	{
		/**
		 * Gets the DOM content loaded event.
		 * @returns The DOM content loaded event manager.
		 */
		get( this: Document ): EventManager<typeof DomContentLoadedEvent>
		{
			return new EventManager<typeof DomContentLoadedEvent>( DomContentLoadedEvent, this );
		}
	}
);
