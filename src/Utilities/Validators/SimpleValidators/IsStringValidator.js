'use strict';

import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is a string.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsStringValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'string';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value;

		this._dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
