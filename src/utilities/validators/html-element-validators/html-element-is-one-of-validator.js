'use strict';

import { InvalidPropertyException } from '../../../types/invalid-property-exception.js';
import { IsOneOfValidator } from '../simple-validators/is-one-of-validator.js';
import { HtmlElementWithInnerValidatorValidator } from './html-element-with-inner-validator-validator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is an element in a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsOneOfValidator extends HtmlElementWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {string} propertyName The name of the HTML element's property to validate.
	 * @param {...any} validValues The set of valid values.
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
