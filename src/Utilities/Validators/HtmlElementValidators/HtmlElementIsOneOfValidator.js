'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsOneOfValidator } from '../SimpleValidators/IsOneOfValidator.js';
import { HtmlElementWithInnerValidatorValidator } from './HtmlElementWithInnerValidatorValidator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is an element in a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsOneOfValidator extends HtmlElementWithInnerValidatorValidator
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
			new IsOneOfValidator( ...validValues )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is an element in the set of valid values.
	 */
	validate()
	{
		return super.validate();
	}
}
