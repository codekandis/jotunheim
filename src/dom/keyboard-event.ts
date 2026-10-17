'use strict';

/**
 * Represents prototype extensions and types of the class `KeyboardEvent`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents extensions of the keyboard event.
	 */
	interface KeyboardEvent
	{
		/**
		 * Determines if any modifier key has been pressed.
		 * @returns True if any modifier key has been pressed, otherwise false.
		 */
		readonly isModified: boolean;
	}
}

Object.defineProperty(
	KeyboardEvent.prototype,
	'isModified',
	{
		/**
		 * Determines if any modifier key has been pressed.
		 * @returns True if any modifier key has been pressed, otherwise false.
		 */
		get( this: KeyboardEvent ): boolean
		{
			return this.ctrlKey || this.shiftKey || this.altKey || this.metaKey;
		}
	}
);
