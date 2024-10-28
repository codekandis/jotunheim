'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsDateStringValidator } from '../SimpleValidators/IsDateStringValidator.js';
import { HtmlElementWithInnerValidatorValidator } from './HtmlElementWithInnerValidatorValidator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a string representation of a date.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsDateStringValidator extends HtmlElementWithInnerValidatorValidator
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
			new IsDateStringValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a string representation of a date.
	 */
	validate()
	{
		return super.validate();
	}
}
