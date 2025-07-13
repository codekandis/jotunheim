'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a date.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsDateValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'Date';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a date.
	 */
	validate( value )
	{
		const isValid = true === value instanceof Date;
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
