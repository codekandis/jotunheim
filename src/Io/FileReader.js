'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `FileReader`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { AbortEvent } from '../Processes/AbortEvent.js';
import { ErrorEvent } from '../Processes/ErrorEvent.js';
import { LoadEndEvent } from '../Processes/LoadEndEvent.js';
import { LoadEvent } from '../Processes/LoadEvent.js';
import { LoadStartEvent } from '../Processes/LoadStartEvent.js';
import { ProgressEvent } from '../Processes/ProgressEvent.js';
import { EventManager } from '../Types/EventManager.js';

/**
 * Gets the abort event.
 * @property {Function} abortEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'abortEvent',
	{
		get()
		{
			return new EventManager( AbortEvent, this );
		}
	}
);

/**
 * Gets the error event.
 * @property {Function} errorEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'errorEvent',
	{
		get()
		{
			return new EventManager( ErrorEvent, this );
		}
	}
);

/**
 * Gets the load event.
 * @property {Function} loadEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'loadEvent',
	{
		get()
		{
			return new EventManager( LoadEvent, this );
		}
	}
);

/**
 * Gets the load end event.
 * @property {Function} loadEndEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'loadEndEvent',
	{
		get()
		{
			return new EventManager( LoadEndEvent, this );
		}
	}
);

/**
 * Gets the load start event.
 * @property {Function} loadStartEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'loadStartEvent',
	{
		get()
		{
			return new EventManager( LoadStartEvent, this );
		}
	}
);

/**
 * Gets the progress event.
 * @property {Function} progressEvent
 * @memberOf FileReader.prototype
 * @type {Function}
 */
Object.defineProperty(
	FileReader.prototype,
	'progressEvent',
	{
		get()
		{
			return new EventManager( ProgressEvent, this );
		}
	}
);
