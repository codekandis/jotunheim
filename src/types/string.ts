'use strict';

/**
 * Represents static and prototype extensions and types of the class `String`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { InvalidIndexException } from './invalid-index-exception.js';
import type { StringFormatter } from './string-formatter.js';

declare global
{
	/**
	 * Represents static extensions of the string class.
	 */
	interface StringConstructor
	{
		/**
		 * Stores an empty string.
		 */
		readonly empty: '';

		/**
		 * Creates a formatter for a string template with indexed placeholders.
		 * @param template The template with the placeholders to format.
		 * @param placeholders The indices of the replacement values.
		 * @returns The string formatter.
		 */
		format( template: TemplateStringsArray, ...placeholders: number[] ): StringFormatter;
	}

	/**
	 * Represents extensions of a string.
	 */
	interface String
	{
		/**
		 * Trims a variadic amount of strings from the start and end of the string.
		 * @param strings The strings to trim.
		 * @returns The trimmed string.
		 */
		trimStrings( ...strings: string[] ): string;

		/**
		 * Trims a variadic amount of strings from the start of the string.
		 * @param strings The strings to trim.
		 * @returns The trimmed string.
		 */
		trimStringsFromStart( ...strings: string[] ): string;

		/**
		 * Trims a variadic amount of strings from the end of the string.
		 * @param strings The strings to trim.
		 * @returns The trimmed string.
		 */
		trimStringsFromEnd( ...strings: string[] ): string;

		/**
		 * Replaces all HTML special characters with their HTML equivalents.
		 * @returns The string with the HTML special characters replaced.
		 */
		replaceHtmlSpecialChars(): string;

		/**
		 * Compares the string against another compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns The result of the locale-aware numeric comparison.
		 */
		strictCompare( compareString: string ): number;

		/**
		 * Determines if the string is equal to a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the strings are equal, otherwise false.
		 */
		isEqualTo( compareString: string ): boolean;

		/**
		 * Determines if the string is lower than a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is lower than the compare string, otherwise false.
		 */
		isLowerThan( compareString: string ): boolean;

		/**
		 * Determines if the string is lower than or equal to a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is lower than or equal to the compare string, otherwise false.
		 */
		isLowerThanOrEqualTo( compareString: string ): boolean;

		/**
		 * Determines if the string is greater than a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is greater than the compare string, otherwise false.
		 */
		isGreaterThan( compareString: string ): boolean;

		/**
		 * Determines if the string is greater than or equal to a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is greater than or equal to the compare string, otherwise false.
		 */
		isGreaterThanOrEqualTo( compareString: string ): boolean;
	}
}

Object.defineProperty(
	String,
	'empty',
	{
		/**
		 * Stores an empty string.
		 */
		value: ''
	}
);

Object.defineProperty(
	String,
	'format',
	{
		/**
		 * Creates a formatter for a string template with indexed placeholders.
		 * @param template The template with the placeholders to format.
		 * @param placeholders The indices of the replacement values.
		 * @returns The string formatter.
		 */
		value: function ( template: TemplateStringsArray, ...placeholders: number[] ): StringFormatter
		       {
			       return ( ...replacements: string[] ): string =>
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

Object.defineProperty(
	String.prototype,
	'trimStrings',
	{
		/**
		 * Trims a variadic amount of strings from the start and end of the string.
		 * @param strings The strings to trim.
		 * @returns The trimmed string.
		 */
		value: function ( this: string, ...strings: string[] ): string
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

Object.defineProperty(
	String.prototype,
	'trimStringsFromStart',
	{
		/**
		 * Trims a variadic amount of strings from the start of the string.
		 * @param strings The strings to trim.
		 * @returns The trimmed string.
		 */
		value: function ( this: string, ...strings: string[] ): string
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

Object.defineProperty(
	String.prototype,
	'trimStringsFromEnd',
	{
		/**
		 * Trims a variadic amount of strings from the end of the string.
		 * @param strings The strings to trim.
		 * @returns The trimmed string.
		 */
		value: function ( this: string, ...strings: string[] ): string
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

Object.defineProperty(
	String.prototype,
	'replaceHtmlSpecialChars',
	{
		/**
		 * Replaces all HTML special characters with their HTML equivalents.
		 * @returns The string with the HTML special characters replaced.
		 */
		value: function ( this: string ): string
		       {
			       const map = {
				       '&':  '&amp;',
				       '<':  '&lt;',
				       '>':  '&gt;',
				       '"':  '&quot;',
				       '\'': '&#039;'
			       };

			       return this.replace(
				       /[&<>"']/g,
				       function ( match: string ): string
				       {
					       return map[ match as keyof typeof map ];
				       }
			       );
		       }
	}
);

Object.defineProperty(
	String.prototype,
	'strictCompare',
	{
		/**
		 * Compares the string against another compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns The result of the locale-aware numeric comparison.
		 */
		value: function ( this: string, compareString: string ): number
		       {
			       return this.localeCompare(
				       compareString,
				       undefined,
				       {
					       numeric: true
				       }
			       );
		       }
	}
);

Object.defineProperty(
	String.prototype,
	'isEqualTo',
	{
		/**
		 * Determines if the string is equal to a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the strings are equal, otherwise false.
		 */
		value: function ( this: string, compareString: string ): boolean
		       {
			       return 0 === this.strictCompare( compareString );
		       }
	}
);

Object.defineProperty(
	String.prototype,
	'isLowerThan',
	{
		/**
		 * Determines if the string is lower than a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is lower than the compare string, otherwise false.
		 */
		value: function ( this: string, compareString: string ): boolean
		       {
			       return -1 === this.strictCompare( compareString );
		       }
	}
);

Object.defineProperty(
	String.prototype,
	'isLowerThanOrEqualTo',
	{
		/**
		 * Determines if the string is lower than or equal to a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is lower than or equal to the compare string, otherwise false.
		 */
		value: function ( this: string, compareString: string ): boolean
		       {
			       return 1 > this.strictCompare( compareString );
		       }
	}
);

Object.defineProperty(
	String.prototype,
	'isGreaterThan',
	{
		/**
		 * Determines if the string is greater than a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is greater than the compare string, otherwise false.
		 */
		value: function ( this: string, compareString: string ): boolean
		       {
			       return 1 === this.strictCompare( compareString );
		       }
	}
);

Object.defineProperty(
	String.prototype,
	'isGreaterThanOrEqualTo',
	{
		/**
		 * Determines if the string is greater than or equal to a compare string in a strict way.
		 * @param compareString The string to compare against.
		 * @returns True if the string is greater than or equal to the compare string, otherwise false.
		 */
		value: function ( this: string, compareString: string ): boolean
		       {
			       return -1 < this.strictCompare( compareString );
		       }
	}
);
