'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsStringInRangeValidator } from '../SimpleValidators/IsStringInRangeValidator.js';
import { ObjectPropertyWithInnerValidatorValidator } from './ObjectPropertyWithInnerValidatorValidator.js';

/**
 * Represents an object validator validating if an object's property is a string within a specific range.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyIsStringInRangeValidator extends ObjectPropertyWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {Object} object The object to validate.
	 * @param {String} propertyName The name of the object's property to validate.
	 * @param {?String} minValue The minimum value of the range. If set to null only the maximum value will be consifered during validation.
	 * @param {?String} maxValue The maximum value of the range. If set to null only the minimum value will be consifered during validation.
	 * @param {Boolean} isInclusive True if the minimum and maximum values are included in the range, otherwise false.
	 * @throws {InvalidPropertyException} The object's property does not exist.
	 * @throws {InvalidArgumentException} Either one of `minValue` or `maxValue` can be null.
	 * @throws {InvalidArgumentException} `minValue` cannot be greater than `maxValue`.
	 */
	constructor( object, propertyName, minValue, maxValue, isInclusive )
	{
		super(
			object,
			propertyName,
			new IsStringInRangeValidator( minValue, maxValue, isInclusive )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the object's property is a string within the specific range.
	 */
	validate()
	{
		return super.validate();
	}
}
