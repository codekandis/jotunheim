'use strict';

/**
 * Represents prototype extensions and types of the class `MouseEvent`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents extensions of the mouse event.
	 */
	interface MouseEvent
	{
		/**
		 * Determines if any modifier key has been pressed.
		 * @returns True if any modifier key has been pressed, otherwise false.
		 */
		readonly isModified: boolean;
	}
}

Object.defineProperty(
	MouseEvent.prototype,
	'isModified',
	{
		/**
		 * Determines if any modifier key has been pressed.
		 * @returns True if any modifier key has been pressed, otherwise false.
		 */
		get( this: MouseEvent ): boolean
		{
			return this.ctrlKey || this.shiftKey || this.altKey || this.metaKey;
		}
	}
);
