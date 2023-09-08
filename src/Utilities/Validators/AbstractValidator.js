'use strict';

import { Abstract } from '../../Types/Abstract.js';
import { EventManager } from '../../Types/EventManager.js';
import { NotImplementedException } from '../../Types/NotImplementedException.js';
import { ValidationFailedEvent } from './ValidationFailedEvent.js';
import { ValidationFailedEventArguments } from './ValidationFailedEventArguments.js';
import { ValidationSucceededEvent } from './ValidationSucceededEvent.js';

/**
 * Represents the base class of any validator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractValidator extends Abstract
{
	/**
	 * Represents the error message if a value is invalid.
	 * @type {String_ReplacementHandler}
	 */
	static get __ERROR_INVALID_VALUE()
	{
		return String.format`Invalid value. \`${ 0 }\` expected.`;
	}

	/**
	 * Represents the error message if a value is invalid containing the value itself.
	 * @type {String_ReplacementHandler}
	 */
	static get __ERROR_INVALID_VALUE_WITH_VALUE()
	{
		return String.format`Invalid value \`${ 1 }\`. \`${ 0 }\` expected.`;
	}

	/**
	 * Gets the constraint of the validation.
	 * @returns {String} The constraint of the validation.
	 */
	get constraint()
	{
		throw NotImplementedException.with_abstractConstant( this, 'constraint' );
	}

	/**
	 * Gets the validation failed event.
	 * @type {Function}
	 */
	get validationFailedEvent()
	{
		return new EventManager( ValidationFailedEvent, this );
	}

	/**
	 * Gets the validation succeeded event.
	 * @type {Function}
	 */
	get validationSucceededEvent()
	{
		return new EventManager( ValidationSucceededEvent, this );
	}

	/**
	 * Dispatches the appropriate validation event based on a specific validation result.
	 * @param {Boolean} isValid True, if the value has been validated successfully, otherwise false.
	 * @param {String} expectedConstraint The expected constraint.
	 * @param {undefined|*} value The validated value, if provided, otherwise undefined.
	 */
	_dispatchValidationEvent( isValid, expectedConstraint, value = undefined )
	{
		if ( false === isValid )
		{
			const eventArguments = new ValidationFailedEventArguments(
				undefined === value
					? this.constructor.__ERROR_INVALID_VALUE( expectedConstraint )
					: this.constructor.__ERROR_INVALID_VALUE_WITH_VALUE( expectedConstraint, value )
			);
			this.validationFailedEvent.dispatch( eventArguments );

			return;
		}

		this.validationSucceededEvent.dispatch();
	}

	/**
	 * Validates a value.
	 * @param {*} value The value to validate.
	 * @returns {Boolean} True if the value is valid, otherwise false.
	 */
	validate( value )
	{
		throw NotImplementedException.with_abstractMethod( this, 'validate' );
	}
}
