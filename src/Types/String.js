'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `String`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { InvalidIndexException } from './InvalidIndexException.js';

/**
 * Represents the replacement handler of the format method.
 * @callback String_ReplacementHandler
 * @param {...String} replacements The replacements to replace the placeholders with.
 * @returns {String} A new string with the placeholders replaced.
 * @throws {InvalidIndexException} A specific placeholder is invalid.
 */

/**
 * Stores an empty string.
 * @property {String} empty Stores an empty string
 * @memberOf String
 * @static
 */
Object.defineProperty(
	String,
	'empty',
	{
		value: ''
	}
);

/**
 * Formats a string with a variadic amount of placeholders and their respective replacements.
 * @method format
 * @memberOf String
 * @static
 * @param {String} template The template with the placeholders to format.
 * @param {...String} placeholders The placeholders to replace.
 * @returns {String_ReplacementHandler} The replacement handler.
 */
Object.defineProperty(
	String,
	'format',
	{
		value: function ( template, ...placeholders )
		       {
			       return ( ...replacements ) =>
			       {
				       const result = [ template[ 0 ] ];

				       placeholders.forEach(
					       ( fetchedPlaceholderValue, fetchedPlaceholderIndex ) =>
					       {
						       if ( false === Number.isSafeInteger( fetchedPlaceholderValue ) )
						       {
							       throw InvalidIndexException.with_index( fetchedPlaceholderValue );
						       }

						       result.add( replacements[ fetchedPlaceholderValue ], template[ fetchedPlaceholderIndex + 1 ] );
					       }
				       );

				       return result.join( String.empty );
			       };
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start and end of the string.
 * @method trimStrings
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStrings',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`^(${ 0 })+`( preparedStrings )
					       ),
					       String.empty
				       )
				       .replace(
					       new RegExp(
						       String.format`(${ 0 })+$`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start of the string.
 * @method trimStringsFromStart
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStringsFromStart',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`^(${ 0 })+`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Trims a variadic amount of strings from the start of the string.
 * @method trimStringsFromEnd
 * @memberOf String.prototype
 * @param {...String} strings The strings to trim.
 * @returns {String} The trimmed string.
 */
Object.defineProperty(
	String.prototype,
	'trimStringsFromEnd',
	{
		value: function ( ...strings )
		       {
			       const preparedStrings = strings
				       .map(
					       ( fetchedString ) =>
					       {
						       return fetchedString.replace( '|', '\\|' );
					       }
				       )
				       .join( '|' );

			       return this
				       .replace(
					       new RegExp(
						       String.format`(${ 0 })+$`( preparedStrings )
					       ),
					       String.empty
				       );
		       }
	}
);

/**
 * Replaces all HTML special characters with their HTML equivalents.
 * @method replaceHtmlSpecialChars
 * @memberOf String.prototype
 * @returns {String} The string with the HTML special characters replaced.
 */
Object.defineProperty(
	String.prototype,
	'replaceHtmlSpecialChars',
	{
		value: function ()
		       {
			       const map = {
				       '&': '&amp;',
				       '<': '&lt;',
				       '>': '&gt;',
				       '"': '&quot;',
				       "'": '&#039;'
			       };

			       return this.replace(
				       /[&<>"']/g,
				       function ( match )
				       {
					       return map[ match ];
				       }
			       );
		       }
	}
);

/**
 * Compares the string against another compare string in a strict way.
 * @method compareStrict
 * @memberOf String.prototype
 * @param {String} compareString The string which against to compare.
 * @returns {Number} -1 if the string comes before the compare string, 0 if the string is equal to the compare string in the sort order and 1 if the string comes after the compare string.
 */
Object.defineProperty(
	String.prototype,
	'compareStrict',
	{
		value: function ( compareString )
		       {
			       return this.localeCompare
			       (
				       compareString,
				       undefined,
				       {
					       numeric: true
				       }
			       )
		       }
	}
);

/**
 * Determines if the string is equal to a compare string in a strict way.
 * @method isEqualTo
 * @memberOf String.prototype
 * @param {String} compareString The string which against to compare.
 * @returns {Boolean} True if the string is equal to the compare string, otherwise false.
 */
Object.defineProperty(
	String.prototype,
	'isEqualTo',
	{
		value: function ( compareString )
		       {
			       return 0 === this.compareStrict( compareString );
		       }
	}
);

/**
 * Determines if the string is lower than a compare string in a strict way.
 * @method isLowerThan
 * @memberOf String.prototype
 * @param {String} compareString The string which against to compare.
 * @returns {Boolean} True if the string is lower than the compare string, otherwise false.
 */
Object.defineProperty(
	String.prototype,
	'isLowerThan',
	{
		value: function ( compareString )
		       {
			       return -1 === this.compareStrict( compareString );
		       }
	}
);

/**
 * Determines if the string is lower than or equal to a compare string in a strict way.
 * @method isLowerThanOrEqualTo
 * @memberOf String.prototype
 * @param {String} compareString The string which against to compare.
 * @returns {Boolean} True if the string is lower than or equal to the compare string, otherwise false.
 */
Object.defineProperty(
	String.prototype,
	'isLowerThanOrEqualTo',
	{
		value: function ( compareString )
		       {
			       return 1 > this.compareStrict( compareString );
		       }
	}
);

/**
 * Determines if the string is greater than a compare string in a strict way.
 * @method isGreaterThan
 * @memberOf String.prototype
 * @param {String} compareString The string which against to compare.
 * @returns {Boolean} True if the string is greater than the compare string, otherwise false.
 */
Object.defineProperty(
	String.prototype,
	'isGreaterThan',
	{
		value: function ( compareString )
		       {
			       return 1 === this.compareStrict( compareString );
		       }
	}
);

/**
 * Determines if the string is greater than or equal to a compare string in a strict way.
 * @method isGreaterThanOrEqualTo
 * @memberOf String.prototype
 * @param {String} compareString The string which against to compare.
 * @returns {Boolean} True if the string is greater than or equal to the compare string, otherwise false.
 */
Object.defineProperty(
	String.prototype,
	'isGreaterThanOrEqualTo',
	{
		value: function ( compareString )
		       {
			       return -1 < this.compareStrict( compareString );
		       }
	}
);
