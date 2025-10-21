'use strict';

import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a string representation of a float.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsFloatStringValidator extends AbstractValidator
{
	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'float string';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string representation of a float.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& true === /^(?:\+|\-)?[0-9]+(?:\.[0-9]+)?$/.test( value );
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
