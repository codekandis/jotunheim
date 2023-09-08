'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsBooleanLiteralStringValidator } from '../SimpleValidators/IsBooleanLiteralStringValidator.js';
import { ObjectPropertyWithInnerValidatorValidator } from './ObjectPropertyWithInnerValidatorValidator.js';

/**
 * Represents an object validator validating if an object's property is a string representation of a boolean literal.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyIsBooleanLiteralStringValidator extends ObjectPropertyWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to validate.
	 * @param {String} propertyName The name of the object's property to validate.
	 * @param {Boolean} validateCaseInsensitive True if the value must be validated case-insensitive, otherwise false.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName, validateCaseInsensitive )
	{
		super(
			object,
			propertyName,
			new IsBooleanLiteralStringValidator( validateCaseInsensitive )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the object's property is a string representation of a boolean literal.
	 */
	validate()
	{
		return super.validate();
	}
}
