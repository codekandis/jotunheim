'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsFloatStringValidator } from '../SimpleValidators/IsFloatStringValidator.js';
import { HtmlElementWithInnerValidatorValidator } from './HtmlElementWithInnerValidatorValidator.js';

/**
 * Represents an HTML element validator validating if a value is a string representation of a float.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsFloatStringValidator extends HtmlElementWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {String} propertyName The name of the HTML element's property to validate.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName )
	{
		super(
			htmlElement,
			propertyName,
			new IsFloatStringValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a string representation of a float.
	 */
	validate()
	{
		return super.validate();
	}
}
