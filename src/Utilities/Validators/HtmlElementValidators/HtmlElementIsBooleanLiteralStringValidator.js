'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { AbstractHtmlElementValidator } from '../AbstractHtmlElementValidator.js';
import { IsBooleanLiteralStringValidator } from '../SimpleValidators/IsBooleanLiteralStringValidator.js';

/**
 * Represents an HTML element validator validating if a value is a string representation of a boolean literal.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsBooleanLiteralStringValidator extends AbstractHtmlElementValidator
{
	/**
	 * Stores the inner validator used for validation.
	 * @type {AbstractValidator}
	 */
	#_innerValidator;

	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {String} propertyName The name of the HTML element's property to validate.
	 * @param {Boolean} validateCaseInsensitive True if the value must be validated case-insensitive, otherwise false.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName, validateCaseInsensitive )
	{
		super( htmlElement, propertyName );

		this.#_innerValidator = new IsBooleanLiteralStringValidator( validateCaseInsensitive );
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a string representation of a boolean literal.
	 */
	validate()
	{
		const value   = this._htmlElement[ this._propertyName ];
		const isValid = this.#_innerValidator.validate( value );

		this.__dispatchValidationEvent( isValid, this.#_innerValidator.constraint, value );

		return isValid;
	}
}
