'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a string representation of a boolean literal.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsBooleanLiteralStringValidator extends AbstractValidator
{
	/**
	 * Stores true if the value must be validated case-insensitive, otherwise false.
	 */
	#_validateCaseInsensitive;

	/**
	 * Constructor method.
	 * @param {Boolean} validateCaseInsensitive True if the value must be validated case-insensitive, otherwise false.
	 */
	constructor( validateCaseInsensitive )
	{
		super();

		this.#_validateCaseInsensitive = validateCaseInsensitive;
	}

	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		return String.format`boolean literal ${ 0 } string`(
			false === this.#_validateCaseInsensitive
				? 'case-sensitive'
				: 'case-insensitive'
		);
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string representation of a boolean literal.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& true === (
				false === this.#_validateCaseInsensitive
					? /^(true|false)$/.test( value )
					: /^(true|false)$/i.test( value )
			);
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
