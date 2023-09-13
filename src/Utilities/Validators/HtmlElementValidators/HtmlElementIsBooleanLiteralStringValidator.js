'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsBooleanLiteralStringValidator } from '../SimpleValidators/IsBooleanLiteralStringValidator.js';
import { HtmlElementWithInnerValidatorValidator } from './HtmlElementWithInnerValidatorValidator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a string representation of a boolean literal.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsBooleanLiteralStringValidator extends HtmlElementWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {String} propertyName The name of the HTML element's property to validate.
	 * @param {Boolean} validateCaseInsensitive True if the value must be validated case-insensitive, otherwise false.
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
