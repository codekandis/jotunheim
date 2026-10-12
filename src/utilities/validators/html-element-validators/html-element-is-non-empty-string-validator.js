'use strict';

import { InvalidPropertyException } from '../../../types/invalid-property-exception.js';
import { IsNonEmptyStringValidator } from '../simple-validators/is-non-empty-string-validator.js';
import { HtmlElementWithInnerValidatorValidator } from './html-element-with-inner-validator-validator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a non-empty string.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsNonEmptyStringValidator extends HtmlElementWithInnerValidatorValidator
{
	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {string} propertyName The name of the HTML element's property to validate.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName )
	{
		super(
			htmlElement,
			propertyName,
			new IsNonEmptyStringValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a non-empty string.
	 */
	validate()
	{
		return super.validate();
	}
}
