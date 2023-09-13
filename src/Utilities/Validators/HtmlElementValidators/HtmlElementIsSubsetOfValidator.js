'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsSubsetOfValidator } from '../SimpleValidators/IsSubsetOfValidator.js';
import { HtmlElementWithInnerValidatorValidator } from './HtmlElementWithInnerValidatorValidator.js';

/**
 * Represents an HTML element HTML element validator validating if a value is a subset of a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsSubsetOfValidator extends HtmlElementWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {String} propertyName The name of the HTML element's property to validate.
	 * @param {...*} validValues The set of valid values.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName, ...validValues )
	{
		super(
			htmlElement,
			propertyName,
			new IsSubsetOfValidator( ...validValues )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a subset of the set of valid values.
	 */
	validate()
	{
		return super.validate();
	}
}
