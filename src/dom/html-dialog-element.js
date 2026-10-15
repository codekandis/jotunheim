'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `HTMLDialogElement`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../types/event-manager.js';
import { CancelEvent } from './cancel-event.js';

/**
 * Gets the cancel event.
 * @property {EventManager_Event} cancelEvent
 * @memberOf HTMLDialogElement.prototype
 * @type {EventManager_Event}
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
