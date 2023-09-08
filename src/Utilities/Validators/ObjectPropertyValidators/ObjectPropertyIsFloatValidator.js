'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsFloatValidator } from '../SimpleValidators/IsFloatValidator.js';
import { ObjectPropertyWithInnerValidatorValidator } from './ObjectPropertyWithInnerValidatorValidator.js';

/**
 * Represents an object validator validating if an object's property is a float.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyIsFloatValidator extends ObjectPropertyWithInnerValidatorValidator
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
			new IsFloatValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the object's property is a float.
	 */
	validate()
	{
		return super.validate();
	}
}
