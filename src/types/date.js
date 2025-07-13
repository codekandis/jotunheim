'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Date`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Compares two dates.
 * @method compare
 * @memberOf Date
 * @param {Date} date_1 The first date to compare.
 * @param {Date} date_2 The second date to compare.
 * @returns {Number} -1 if the first date is lower than the second date, 0 if both dates are equal, 1 if the first date is greater than the second date.
 * @static
 */
Object.defineProperty(
	Date,
	'compare',
	{
		value: function ( date_1, date_2 )
		       {
			       const time_1 = date_1.getTime();
			       const time_2 = date_2.getTime();
			       if ( time_1 < time_2 )
			       {
				       return -1;
			       }
			       if ( time_1 === time_2 )
			       {
				       return 0;
			       }
			       if ( time_1 > time_2 )
			       {
				       return 1;
			       }
		       }
	}
);

/**
 * Creates a date from a JSON date object.
 * @method fromJSON
 * @memberOf Date
 * @param {Object} data The JSON object to create the date from.
 * @returns {Date} The created date.
 * @static
 */
Object.defineProperty(
	Date,
	'fromJSON',
	{
		value: function ( data )
		       {
			       return undefined === data || null === data
				       ? null
				       : new Date( data.date );
		       }
	}
);

/**
 * Compares the date with another specific date.
 * @method compareWith
 * @memberOf Date.prototype
 * @param {Date} date The date to compare with.
 * @returns {Number} -1 if the date is lower than the passed date, 0 if both dates are equal, 1 if the date is greater than the passed date.
 */
Object.defineProperty(
	Date.prototype,
	'compareWith',
	{
		value: function ( date )
		       {
			       return Date.compare( this, date );
		       }
	}
);
