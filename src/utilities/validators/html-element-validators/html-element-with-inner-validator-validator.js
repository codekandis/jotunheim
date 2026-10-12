'use strict';

import { InvalidPropertyException } from '../../../types/invalid-property-exception.js';
import { AbstractHtmlElementValidator } from '../abstract-html-element-validator.js';

/**
 * Represents an HTML element validator validating with an inner validator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementWithInnerValidatorValidator extends AbstractHtmlElementValidator
{
	/**
	 * Stores the inner validator used for validation.
	 * @type {AbstractValidator}
	 */
	#_innerValidator;

	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {string} propertyName The name of the HTML element's property to validate.
	 * @param {AbstractValidator} innerValidator The innerValidator used for validation.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName, innerValidator )
	{
		super( htmlElement, propertyName );

		this.#_innerValidator = innerValidator;
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property with the inner validator.
	 */
	validate()
	{
		const value   = this._htmlElement[ this._propertyName ];
		const isValid = this.#_innerValidator.validate( value );

		this.__dispatchValidationEvent( isValid, this.#_innerValidator.constraint, value );

		return isValid;
	}
}
