'use strict';

/**
 * Represents prototype extensions and types of the class `Date`.
 * @author Christian Ramelow <info@codekandis.net>
 */

export {};

declare global
{
	/**
	 * Represents static extensions of the date class.
	 */
	interface DateConstructor
	{
		/**
		 * Compares two dates.
		 * @param date_1 The first date to compare.
		 * @param date_2 The second date to compare.
		 * @returns -1 if the first date is lower than the second date, 0 if both dates are equal, 1 if the first date is greater than the second date, otherwise undefined.
		 */
		compare( date_1: Date, date_2: Date ): undefined | number;

		/**
		 * Creates a date from a JSON date object.
		 * @param data The JSON object to create the date from.
		 * @returns The created date, or null if the data is undefined or null.
		 */
		fromJSON(
			data: undefined | null | {
				date: string
			}
		): null | Date;
	}

	/**
	 * Represents extensions of the date.
	 */
	interface Date
	{
		/**
		 * Compares the date with another specific date.
		 * @param date The date to compare with.
		 * @returns -1 if the date is lower than the passed date, 0 if both dates are equal, 1 if the date is greater than the passed date, otherwise undefined.
		 */
		compareWith( date: Date ): undefined | number;
	}
}

Object.defineProperty(
	Date,
	'compare',
	{
		/**
		 * Compares two dates.
		 * @param date_1 The first date to compare.
		 * @param date_2 The second date to compare.
		 * @returns -1 if the first date is lower than the second date, 0 if both dates are equal, 1 if the first date is greater than the second date, otherwise undefined.
		 */
		value: function ( date_1: Date, date_2: Date ): undefined | number
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

			       return undefined;
		       }
	}
);

Object.defineProperty(
	Date,
	'fromJSON',
	{
		/**
		 * Creates a date from a JSON date object.
		 * @param data The JSON object to create the date from.
		 * @returns The created date, or null if the data is undefined or null.
		 */
		value: function (
			data: undefined | null | {
				date: string
			}
		): null | Date
		       {
			       return undefined === data || null === data
				       ? null
				       : new Date( data.date );
		       }
	}
);

Object.defineProperty(
	Date.prototype,
	'compareWith',
	{
		/**
		 * Compares the date with another specific date.
		 * @param date The date to compare with.
		 * @returns -1 if the date is lower than the passed date, 0 if both dates are equal, 1 if the date is greater than the passed date, otherwise undefined.
		 */
		value: function ( this: Date, date: Date ): undefined | number
		       {
			       return Date.compare( this, date );
		       }
	}
);
