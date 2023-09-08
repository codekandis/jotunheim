'use strict';

import { Abstract } from '../../Types/Abstract.js';
import { EventManager } from '../../Types/EventManager.js';
import { InvalidPropertyException } from '../../Types/InvalidPropertyException.js';
import { NotImplementedException } from '../../Types/NotImplementedException.js';
import { ObjectPropertyValidationFailedEvent } from './ObjectPropertyValidationFailedEvent.js';
import { ObjectPropertyValidationFailedEventArguments } from './ObjectPropertyValidationFailedEventArguments.js';
import { ObjectPropertyValidationSucceededEvent } from './ObjectPropertyValidationSucceededEvent.js';
import { ObjectPropertyValidationSucceededEventArguments } from './ObjectPropertyValidationSucceededEventArguments.js';

/**
 * Represents the base class of any object property validator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractObjectPropertyValidator extends Abstract
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
	 * Stores the object to validate.
	 * @type {Object}
	 */
	#_object;

	/**
	 * Stores the name of the object's property to validate.
	 * @type {String}
	 */
	#_propertyName;

	/**
	 * Constructor method.
	 * @param {Object} object The object to validate.
	 * @param {String} propertyName The name of the object's property to validate.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName )
	{
		super();

		if ( false === object.hasProperty( propertyName ) )
		{
			throw InvalidPropertyException.with_property( propertyName );
		}

		this.#_object       = object;
		this.#_propertyName = propertyName;
	}

	/**
	 * Stores the object to validate.
	 * @returns {Object} The object to validate.
	 */
	get _object()
	{
		return this.#_object;
	}

	/**
	 * Stores the name of the object's property to validate.
	 * @returns {String} The name of the object's property to validate.
	 */
	get _propertyName()
	{
		return this.#_propertyName;
	}

	/**
	 * Gets the constraint of the validation.
	 * @return {String} The constraint of the validation.
	 * @throws
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
		return new EventManager( ObjectPropertyValidationFailedEvent, this );
	}

	/**
	 * Gets the validation succeeded event.
	 * @type {Function}
	 */
	get validationSucceededEvent()
	{
		return new EventManager( ObjectPropertyValidationSucceededEvent, this );
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
			const eventArguments = new ObjectPropertyValidationFailedEventArguments(
				this.#_object,
				this.#_propertyName,
				undefined === value
					? this.constructor.__ERROR_INVALID_VALUE( expectedConstraint )
					: this.constructor.__ERROR_INVALID_VALUE_WITH_VALUE( expectedConstraint, value )
			);
			this.validationFailedEvent.dispatch( eventArguments );

			return;
		}

		const eventArguments = new ObjectPropertyValidationSucceededEventArguments( this.#_object, this.#_propertyName );
		this.validationSucceededEvent.dispatch( eventArguments );
	}

	/**
	 * Validates the object's property.
	 * @returns {Boolean} True if the object's property is valid, otherwise false.
	 */
	validate()
	{
		throw NotImplementedException.with_abstractMethod( this, 'validate' );
	}
}
