'use strict';

import { InvalidPropertyException } from '../../../types/invalid-property-exception.js';
import { IsBooleanIntegerStringValidator } from '../simple-validators/is-boolean-integer-string-validator.js';
import { HtmlElementWithInnerValidatorValidator } from './html-element-with-inner-validator-validator.js';

/**
 * Represents an HTML element validator validating if an HTML's property is a string representation of a boolean integer.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsBooleanIntegerStringValidator extends HtmlElementWithInnerValidatorValidator
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
			new IsBooleanIntegerStringValidator()
		);
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a string representation of a boolean integer.
	 */
	validate()
	{
		return super.validate();
	}
}
