'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Document`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../types/event-manager.js';
import { DomContentLoadedEvent } from './dom-content-loaded-event.js';

/**
 * Gets the DOM content loaded event.
 * @property {Function} domContentLoadedEvent
 * @memberOf Document.prototype
 * @type {Function}
 */
Object.defineProperty(
	Document.prototype,
	'domContentLoadedEvent',
	{
		get()
		{
			return new EventManager( DomContentLoadedEvent, this );
		}
	}
);
