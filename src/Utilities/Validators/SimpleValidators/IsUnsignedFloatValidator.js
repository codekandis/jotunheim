'use strict';

import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is an unsigned float.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsUnsignedFloatValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'unsigned float';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is an unsigned float.
	 */
	validate( value )
	{
		const isValid = 'number' === typeof value
			&& 0 <= value;

		this._dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
