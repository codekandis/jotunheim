'use strict';

/**
 * Represents prototype extensions and types of the class `HTMLDialogElement`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../types/event-manager.js';
import { CancelEvent } from './cancel-event.js';

declare global
{
	/**
	 * Represents extensions of the HTML dialog element.
	 */
	interface HTMLDialogElement
	{
		/**
		 * Gets the cancel event.
		 * @returns The cancel event manager.
		 */
		readonly cancelEvent: EventManager<typeof CancelEvent>;
	}
}

Object.defineProperty(
	HTMLDialogElement.prototype,
	'cancelEvent',
	{
		/**
		 * Gets the cancel event.
		 * @returns The cancel event manager.
		 */
		get( this: HTMLDialogElement ): EventManager<typeof CancelEvent>
		{
			return new EventManager<typeof CancelEvent>( CancelEvent, this );
		}
	}
);
