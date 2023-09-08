'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsSubsetOfValidator } from '../SimpleValidators/IsSubsetOfValidator.js';
import { ObjectPropertyWithInnerValidatorValidator } from './ObjectPropertyWithInnerValidatorValidator.js';

/**
 * Represents an object validator validating if an object's property is a subset of a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyIsSubsetOfValidator extends ObjectPropertyWithInnerValidatorValidator
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
			new IsSubsetOfValidator( ...validValues )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the object's property is a subset of the set of valid values.
	 */
	validate()
	{
		return super.validate();
	}
}
