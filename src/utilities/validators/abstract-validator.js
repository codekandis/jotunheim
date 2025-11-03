'use strict';

import { Abstract } from '../../types/abstract.js';
import { EventManager } from '../../types/event-manager.js';
import { NotImplementedException } from '../../types/not-implemented-exception.js';
import { ValidationFailedEventArguments } from './validation-failed-event-arguments.js';
import { ValidationFailedEvent } from './validation-failed-event.js';
import { ValidationSucceededEvent } from './validation-succeeded-event.js';

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
	 * Gets the constaint of the validation.
	 * @returns {string} The constraint of the validation.
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
	 * @param {boolean} isValid True if the value is valid, otherwise false.
	 * @param {string} expectedConstraint The expected constraint.
	 * @param {any} value The validated value.
	 */
	__dispatchValidationEvent( isValid, expectedConstraint, value = undefined )
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
	 * @param {any} value The value to validate.
	 * @returns {boolean} True if the value is valid, otherwise false.
	 */
	validate( value )
	{
		throw NotImplementedException.with_abstractMethod( this, 'validate' );
	}
}
