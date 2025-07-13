'use strict';

import { InvalidPropertyException } from '../../../types/invalid-property-exception.js';
import { IsSubsetOfValidator } from '../simple-validators/is-subset-of-validator.js';
import { HtmlElementWithInnerValidatorValidator } from './html-element-with-inner-validator-validator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a subset of a set of valid values.
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
