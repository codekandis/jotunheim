'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { AbstractHtmlElementValidator } from '../AbstractHtmlElementValidator.js';
import { IsOneOfValidator } from '../SimpleValidators/IsOneOfValidator.js';

/**
 * Represents an HTML element HTML element validator validating if a value is an element in a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsOneOfValidator extends AbstractHtmlElementValidator
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
	 * @param {...*} validValues The set of valid values.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName, ...validValues )
	{
		super( htmlElement, propertyName );

		this.#_innerValidator = new IsOneOfValidator( ...validValues );
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is an element in the set of valid values.
	 */
	validate()
	{
		const value   = this._htmlElement[ this._propertyName ];
		const isValid = this.#_innerValidator.validate( value );

		this.__dispatchValidationEvent( isValid, this.#_innerValidator.constraint, value );

		return isValid;
	}
}
