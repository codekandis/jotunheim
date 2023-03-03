'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `Date`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Creates a date from a JSON date object.
 * @method fromJSON
 * @memberOf Date
 * @param {Object} The JSON object to create the date from.
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
