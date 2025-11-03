'use strict';

import { InvalidPropertyException } from '../../../types/invalid-property-exception.js';
import { IsBooleanLiteralStringValidator } from '../simple-validators/is-boolean-literal-string-validator.js';
import { HtmlElementWithInnerValidatorValidator } from './html-element-with-inner-validator-validator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a string representation of a boolean literal.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsBooleanLiteralStringValidator extends HtmlElementWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {string} propertyName The name of the HTML element's property to validate.
	 * @param {boolean} validateCaseInsensitive True if the value must be validated case-insensitive, otherwise false.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName, validateCaseInsensitive )
	{
		super(
			htmlElement,
			propertyName,
			new IsBooleanLiteralStringValidator( validateCaseInsensitive )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a string representation of a boolean literal.
	 */
	validate()
	{
		return super.validate();
	}
}
