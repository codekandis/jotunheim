'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a float.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsFloatValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'float';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a float.
	 */
	validate( value )
	{
		const isValid = 'number' === typeof value;
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
