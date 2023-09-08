'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsIntegerStringValidator } from '../SimpleValidators/IsIntegerStringValidator.js';
import { ObjectPropertyWithInnerValidatorValidator } from './ObjectPropertyWithInnerValidatorValidator.js';

/**
 * Represents an object validator validating if an object's property is a string representation of an integer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyIsIntegerStringValidator extends ObjectPropertyWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to validate.
	 * @param {String} propertyName The name of the object's property to validate.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName )
	{
		super(
			object,
			propertyName,
			new IsIntegerStringValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the object's property is a string representation of an integer.
	 */
	validate()
	{
		return super.validate();
	}
}
