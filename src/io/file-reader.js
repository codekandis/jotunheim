'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `FileReader`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { AbortEvent } from '../processes/abort-event.js';
import { ErrorEvent } from '../processes/error-event.js';
import { LoadEndEvent } from '../processes/load-end-event.js';
import { LoadEvent } from '../processes/load-event.js';
import { LoadStartEvent } from '../processes/load-start-event.js';
import { ProgressEvent } from '../processes/progress-event.js';
import { EventManager } from '../types/event-manager.js';

/**
 * Gets the abort event.
 * @property {EventManager_Event} abortEvent
 * @memberOf FileReader.prototype
 * @type {EventManager_Event}
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
 * @property {EventManager_Event} errorEvent
 * @memberOf FileReader.prototype
 * @type {EventManager_Event}
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
 * @property {EventManager_Event} loadEvent
 * @memberOf FileReader.prototype
 * @type {EventManager_Event}
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
 * @property {EventManager_Event} loadEndEvent
 * @memberOf FileReader.prototype
 * @type {EventManager_Event}
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
 * @property {EventManager_Event} loadStartEvent
 * @memberOf FileReader.prototype
 * @type {EventManager_Event}
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
 * @property {EventManager_Event} progressEvent
 * @memberOf FileReader.prototype
 * @type {EventManager_Event}
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
