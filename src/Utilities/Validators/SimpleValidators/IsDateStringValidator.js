'use strict';

import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is a string representation of a date.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsDateStringValidator extends AbstractValidator
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'date string';
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string representation of a date.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& false === window.isNaN(
				Date.parse( value )
			);

		this._dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
