'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsStringMatchingRegExValidator } from '../SimpleValidators/IsStringMatchingRegExValidator.js';
import { ObjectPropertyWithInnerValidatorValidator } from './ObjectPropertyWithInnerValidatorValidator.js';

/**
 * Represents an object validator validating if an object's property is a string matching a specific regular expression.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyIsStringMatchingRegExValidator extends ObjectPropertyWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to validate.
	 * @param {String} propertyName The name of the object's property to validate.
	 * @param {RegExp} regEx The regular expression which against is validated.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 */
	constructor( object, propertyName, regEx )
	{
		super(
			object,
			propertyName,
			new IsStringMatchingRegExValidator( regEx )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the object's property is a string matching a specific regular expression.
	 */
	validate()
	{
		return super.validate();
	}
}
