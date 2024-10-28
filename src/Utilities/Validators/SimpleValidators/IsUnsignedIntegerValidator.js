'use strict';

import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is an unsigned integer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsUnsignedIntegerValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'unsigned integer';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is an unsigned integer.
	 */
	validate( value )
	{
		const isValid = 'number' === typeof value
			&& true === Number.isSafeInteger( value )
			&& 0 <= value;
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
