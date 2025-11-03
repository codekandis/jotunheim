'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `MouseEvent`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Determines if any modifier key has been pressed.
 * @property {Function} beforeInputEvent
 * @memberOf MouseEvent.prototype
 * @returns {boolean} True if any modifier key has been pressed, otherwise false.
 */
Object.defineProperty(
	MouseEvent.prototype,
	'isModified',
	{
		get()
		{
			return this.ctrlKey || this.shiftKey || this.altKey || this.metaKey;
		}
	}
);
