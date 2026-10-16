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
 * @property {EventManager<typeof AbortEvent>} abortEvent
 * @memberOf FileReader.prototype
 * @type {EventManager<typeof AbortEvent>}
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
 * @property {EventManager<typeof ErrorEvent>} errorEvent
 * @memberOf FileReader.prototype
 * @type {EventManager<typeof ErrorEvent>}
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
 * @property {EventManager<typeof LoadEvent>} loadEvent
 * @memberOf FileReader.prototype
 * @type {EventManager<typeof LoadEvent>}
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
 * @property {EventManager<typeof LoadEndEvent>} loadEndEvent
 * @memberOf FileReader.prototype
 * @type {EventManager<typeof LoadEndEvent>}
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
 * @property {EventManager<typeof LoadStartEvent>} loadStartEvent
 * @memberOf FileReader.prototype
 * @type {EventManager<typeof LoadStartEvent>}
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
 * @property {EventManager<typeof ProgressEvent>} progressEvent
 * @memberOf FileReader.prototype
 * @type {EventManager<typeof ProgressEvent>}
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
