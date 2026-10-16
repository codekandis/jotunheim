'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `HTMLDialogElement`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../types/event-manager.js';
import { CancelEvent } from './cancel-event.js';

/**
 * Gets the cancel event.
 * @property {EventManager<typeof CancelEvent>} cancelEvent
 * @memberOf HTMLDialogElement.prototype
 * @type {EventManager<typeof CancelEvent>}
 */
Object.defineProperty(
	HTMLDialogElement.prototype,
	'cancelEvent',
	{
		get()
		{
			return new EventManager( CancelEvent, this );
		}
	}
);
