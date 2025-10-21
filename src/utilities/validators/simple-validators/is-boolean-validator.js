'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a boolean.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsBooleanValidator extends AbstractValidator
{
	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'boolean';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a boolean.
	 */
	validate( value )
	{
		const isValid = 'boolean' === typeof value;
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
