'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsUnsignedIntegerStringValidator } from '../SimpleValidators/IsUnsignedIntegerStringValidator.js';
import { HtmlElementWithInnerValidatorValidator } from './HtmlElementWithInnerValidatorValidator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a string representation of an unsigned integer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsUnsignedIntegerStringValidator extends HtmlElementWithInnerValidatorValidator
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
			new IsUnsignedIntegerStringValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a string representation of an unsigned integer.
	 */
	validate()
	{
		return super.validate();
	}
}
