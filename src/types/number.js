'use strict';

/**
 * Validates if a value is within a specific range.
 * @method isWithinRange
 * @memberOf Number
 * @static
 * @param {number} value The value to validate.
 * @param {number} minValue The minimum value of the range.
 * @param {number} maxValue The maximum value of the range.
 * @returns {boolean} True if the value is within a specific range, otherwise false.
 */
Object.defineProperty(
	Number,
	'isWithinRange',
	{
		value: function ( value, minValue, maxValue )
		       {
			       return minValue <= value && maxValue >= value;
		       }
	}
);

/**
 * Validates if a value is out of a specific range.
 * @method isOutOfRange
 * @memberOf Number
 * @static
 * @param {number} value The value to validate.
 * @param {number} minValue The minimum value of the range.
 * @param {number} maxValue The maximum value of the range.
 * @returns {boolean} True if the value is out of a specific range, otherwise false.
 */
Object.defineProperty(
	Number,
	'isOutOfRange',
	{
		value: function ( value, minValue, maxValue )
		       {
			       return minValue > value || maxValue < value;
		       }
	}
);
