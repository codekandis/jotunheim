'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is an integer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsIntegerValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'integer';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is an integer.
	 */
	validate( value )
	{
		const isValid = 'number' === typeof value
			&& true === Number.isSafeInteger( value );
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
