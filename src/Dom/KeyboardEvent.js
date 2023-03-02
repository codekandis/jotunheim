'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `KeyboardEvent`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Determines if any modifier key has been pressed.
 * @property {Function} beforeInputEvent
 * @memberOf KeyboardEvent.prototype
 * @returns {Boolean} True if any modifier key has been pressed, otherwise false.
 */
Object.defineProperty(
	KeyboardEvent.prototype,
	'isModified',
	{
		get()
		{
			return this.ctrlKey || this.shiftKey || this.altKey || this.metaKey;
		}
	}
);
