'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a string representation of a boolean integer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsBooleanIntegerStringValidator extends AbstractValidator
{
	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'boolean integer string';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string representation of a boolean integer.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& true === /^(0|1)$/.test( value );
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
