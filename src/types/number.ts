'use strict';

/**
 * Represents static extensions and types of the class `Number`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents static extensions of the number class.
	 */
	interface NumberConstructor
	{
		/**
		 * Validates if a value is within a specific range.
		 * @param value The value to validate.
		 * @param minValue The minimum value of the range.
		 * @param maxValue The maximum value of the range.
		 * @returns True if the value is within the range, otherwise false.
		 */
		isWithinRange( value: number, minValue: number, maxValue: number ): boolean;

		/**
		 * Validates if a value is out of a specific range.
		 * @param value The value to validate.
		 * @param minValue The minimum value of the range.
		 * @param maxValue The maximum value of the range.
		 * @returns True if the value is out of the range, otherwise false.
		 */
		isOutOfRange( value: number, minValue: number, maxValue: number ): boolean;
	}
}

Object.defineProperty(
	Number,
	'isWithinRange',
	{
		/**
		 * Validates if a value is within a specific range.
		 * @param value The value to validate.
		 * @param minValue The minimum value of the range.
		 * @param maxValue The maximum value of the range.
		 * @returns True if the value is within the range, otherwise false.
		 */
		value: function ( value: number, minValue: number, maxValue: number ): boolean
		       {
			       return minValue <= value && maxValue >= value;
		       }
	}
);

Object.defineProperty(
	Number,
	'isOutOfRange',
	{
		/**
		 * Validates if a value is out of a specific range.
		 * @param value The value to validate.
		 * @param minValue The minimum value of the range.
		 * @param maxValue The maximum value of the range.
		 * @returns True if the value is out of the range, otherwise false.
		 */
		value: function ( value: number, minValue: number, maxValue: number ): boolean
		       {
			       return minValue > value || maxValue < value;
		       }
	}
);
