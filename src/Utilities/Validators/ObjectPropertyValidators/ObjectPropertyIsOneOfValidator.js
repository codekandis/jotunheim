'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsOneOfValidator } from '../SimpleValidators/IsOneOfValidator.js';
import { ObjectPropertyWithInnerValidatorValidator } from './ObjectPropertyWithInnerValidatorValidator.js';

/**
 * Represents an object validator validating if an object's property is an element in a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyIsOneOfValidator extends ObjectPropertyWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to validate.
	 * @param {String} propertyName The name of the object's property to validate.
	 * @param {...*} validValues The set of valid values.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName, ...validValues )
	{
		super(
			object,
			propertyName,
			new IsOneOfValidator( ...validValues )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the object's property is an element in the set of valid values.
	 */
	validate()
	{
		return super.validate();
	}
}
