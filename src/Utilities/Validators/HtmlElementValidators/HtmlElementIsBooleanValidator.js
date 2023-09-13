'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { IsBooleanValidator } from '../SimpleValidators/IsBooleanValidator.js';
import { HtmlElementWithInnerValidatorValidator } from './HtmlElementWithInnerValidatorValidator.js';

/**
 * Represents an HTML element validator validating if a value is a boolean.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsBooleanValidator extends HtmlElementWithInnerValidatorValidator
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
			new IsBooleanValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a boolean.
	 */
	validate()
	{
		return super.validate();
	}
}
