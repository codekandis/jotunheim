'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a string representation of an unsigned integer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsUnsignedIntegerStringValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'unsigned integer string';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string representation of an unsigned integer.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& true === /^[0-9]+$/.test( value );
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
