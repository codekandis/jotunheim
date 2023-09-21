'use strict';

import { IsStringValidator } from '../Validators/SimpleValidators/IsStringValidator.js';
import { AbstractFilter } from './AbstractFilter.js';

/**
 * Represents the base class of any filter filtering a string value.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractStringValueFilter extends AbstractFilter
{
	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return 'string';
	}

	/**
	 * Validates if the value is a string.
	 * @param {*} value The value to validate.
	 * @returns {Boolean} True if the value is valid, otherwise false.
	 */
	_validate( value )
	{
		return ( new IsStringValidator() )
			.validate( value );
	}
}
