'use strict';

import { InvalidPropertyException } from '../../../types/invalid-property-exception.js';
import { IsStringInRangeValidator } from '../simple-validators/is-string-in-range-validator.js';
import { HtmlElementWithInnerValidatorValidator } from './html-element-with-inner-validator-validator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a string within a specific range.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsStringInRangeValidator extends HtmlElementWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {string} propertyName The name of the HTML element's property to validate.
	 * @param {?string} minValue The minimum value of the range. If set to null only the maximum value will be consifered during validation.
	 * @param {?string} maxValue The maximum value of the range. If set to null only the minimum value will be consifered during validation.
	 * @param {boolean} isInclusive True if the minimum and maximum values are included in the range, otherwise false.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 * @throws InvalidArgumentException Either one of `minValue` or `maxValue` can be null.
	 * @throws InvalidArgumentException `minValue` cannot be greater than `maxValue`.
	 */
	constructor( htmlElement, propertyName, minValue, maxValue, isInclusive )
	{
		super(
			htmlElement,
			propertyName,
			new IsStringInRangeValidator( minValue, maxValue, isInclusive )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a string within the specific range.
	 */
	validate()
	{
		return super.validate();
	}
}
