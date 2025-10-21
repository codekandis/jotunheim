'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a non-empty string.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsNonEmptyStringValidator extends AbstractValidator
{
	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'non-empty string';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a non-empty string.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& String.empty !== value;
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
