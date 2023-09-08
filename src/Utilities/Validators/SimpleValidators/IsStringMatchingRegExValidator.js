'use strict';

import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is a string matching a specific regular expression.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsStringMatchingRegExValidator extends AbstractValidator
{
	/**
	 * Stores the regular expression which against is validated.
	 * @type {RegExp}
	 */
	#_regEx;

	/**
	 * Constructor method.
	 * @param {RegExp} regEx The regular expression which against is validated.
	 */
	constructor( regEx )
	{
		super();

		this.#_regEx = regEx;
	}

	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return String.format`string = ${ 0 }`(
			this.#_regEx.toString()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string representation of an integer.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& true === this.#_regEx.test( value );

		this._dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
