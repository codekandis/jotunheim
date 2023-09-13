'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { AbstractObjectPropertyValidator } from '../AbstractObjectPropertyValidator.js';

/**
 * Represents an object property validator validating with an inner validator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyWithInnerValidatorValidator extends AbstractObjectPropertyValidator
{
	/**
	 * Stores the inner validator used for validation.
	 * @type {AbstractValidator}
	 */
	#_innerValidator;

	/**
	 * Constructor method.
	 * @param {Object} object The object to validate.
	 * @param {String} propertyName The name of the object's property to validate.
	 * @param {AbstractValidator} innerValidator The inner validator used for validation.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName, innerValidator )
	{
		super( object, propertyName );

		this.#_innerValidator = innerValidator;
	}

	/**
	 * @inheritdoc
	 * Validates the object's property with the inner validator.
	 */
	validate()
	{
		const value   = this._object[ this._propertyName ];
		const isValid = this.#_innerValidator.validate( value );

		this._dispatchValidationEvent( isValid, this.#_innerValidator.constraint, value );

		return isValid;
	}
}
