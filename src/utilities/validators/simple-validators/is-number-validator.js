'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a number.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsNumberValidator extends AbstractValidator
{
	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'number';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a number.
	 */
	validate( value )
	{
		const isValid = 'number' === typeof value;
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
