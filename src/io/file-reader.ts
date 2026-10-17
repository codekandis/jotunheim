'use strict';

/**
 * Represents prototype extensions and types of the class `FileReader`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { AbortEvent } from '../processes/abort-event.js';
import { ErrorEvent } from '../processes/error-event.js';
import { LoadEndEvent } from '../processes/load-end-event.js';
import { LoadEvent } from '../processes/load-event.js';
import { LoadStartEvent } from '../processes/load-start-event.js';
import { ProgressEvent } from '../processes/progress-event.js';
import { EventManager } from '../types/event-manager.js';

declare global
{
	/**
	 * Represents extensions of the file reader.
	 */
	interface FileReader
	{
		/**
		 * Gets the abort event.
		 * @returns The abort event manager.
		 */
		readonly abortEvent: EventManager<typeof AbortEvent>;

		/**
		 * Gets the error event.
		 * @returns The error event manager.
		 */
		readonly errorEvent: EventManager<typeof ErrorEvent>;

		/**
		 * Gets the load event.
		 * @returns The load event manager.
		 */
		readonly loadEvent: EventManager<typeof LoadEvent>;

		/**
		 * Gets the load end event.
		 * @returns The load end event manager.
		 */
		readonly loadEndEvent: EventManager<typeof LoadEndEvent>;

		/**
		 * Gets the load start event.
		 * @returns The load start event manager.
		 */
		readonly loadStartEvent: EventManager<typeof LoadStartEvent>;

		/**
		 * Gets the progress event.
		 * @returns The progress event manager.
		 */
		readonly progressEvent: EventManager<typeof ProgressEvent>;
	}
}

Object.defineProperty(
	FileReader.prototype,
	'abortEvent',
	{
		/**
		 * Gets the abort event.
		 * @returns The abort event manager.
		 */
		get( this: FileReader ): EventManager<typeof AbortEvent>
		{
			return new EventManager<typeof AbortEvent>( AbortEvent, this );
		}
	}
);

Object.defineProperty(
	FileReader.prototype,
	'errorEvent',
	{
		/**
		 * Gets the error event.
		 * @returns The error event manager.
		 */
		get( this: FileReader ): EventManager<typeof ErrorEvent>
		{
			return new EventManager<typeof ErrorEvent>( ErrorEvent, this );
		}
	}
);

Object.defineProperty(
	FileReader.prototype,
	'loadEvent',
	{
		/**
		 * Gets the load event.
		 * @returns The load event manager.
		 */
		get( this: FileReader ): EventManager<typeof LoadEvent>
		{
			return new EventManager<typeof LoadEvent>( LoadEvent, this );
		}
	}
);

Object.defineProperty(
	FileReader.prototype,
	'loadEndEvent',
	{
		/**
		 * Gets the load end event.
		 * @returns The load end event manager.
		 */
		get( this: FileReader ): EventManager<typeof LoadEndEvent>
		{
			return new EventManager<typeof LoadEndEvent>( LoadEndEvent, this );
		}
	}
);

Object.defineProperty(
	FileReader.prototype,
	'loadStartEvent',
	{
		/**
		 * Gets the load start event.
		 * @returns The load start event manager.
		 */
		get( this: FileReader ): EventManager<typeof LoadStartEvent>
		{
			return new EventManager<typeof LoadStartEvent>( LoadStartEvent, this );
		}
	}
);

Object.defineProperty(
	FileReader.prototype,
	'progressEvent',
	{
		/**
		 * Gets the progress event.
		 * @returns The progress event manager.
		 */
		get( this: FileReader ): EventManager<typeof ProgressEvent>
		{
			return new EventManager<typeof ProgressEvent>( ProgressEvent, this );
		}
	}
);
