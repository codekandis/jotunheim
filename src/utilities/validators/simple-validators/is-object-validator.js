'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is an object.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsObjectValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'object';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is an object.
	 */
	validate( value )
	{
		const isValid = 'object' === typeof value;
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
