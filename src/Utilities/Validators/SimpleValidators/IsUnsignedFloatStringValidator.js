'use strict';

import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is a string representation of an unsigned float.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsUnsignedFloatStringValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'unsigned float string';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string representation of an unsigned float.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& true === /^[0-9]+(?:\.[0-9]+)?$/.test( value );

		this._dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
