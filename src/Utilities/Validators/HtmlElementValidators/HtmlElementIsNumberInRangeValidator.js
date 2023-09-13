'use strict';

import { InvalidPropertyException } from '../../../Types/InvalidPropertyException.js';
import { AbstractHtmlElementValidator } from '../AbstractHtmlElementValidator.js';
import { IsNumberInRangeValidator } from '../SimpleValidators/IsNumberInRangeValidator.js';

/**
 * Represents an HTML element validator validating if a value is a number within a specific range.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementIsNumberInRangeValidator extends AbstractHtmlElementValidator
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
	 * @param {?Number} minValue The minimum value of the range. If set to null only the maximum value will be consifered during validation.
	 * @param {?Number} maxValue The maximum value of the range. If set to null only the minimum value will be consifered during validation.
	 * @param {Boolean} isInclusive True if the minimum and maximum values are included in the range, otherwise false.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 * @throws InvalidArgumentException Either one of `minValue` or `maxValue` can be null.
	 * @throws InvalidArgumentException `minValue` cannot be greater than `maxValue`.
	 */
	constructor( htmlElement, propertyName, minValue, maxValue, isInclusive )
	{
		super( htmlElement, propertyName );

		this.#_innerValidator = new IsNumberInRangeValidator( minValue, maxValue, isInclusive );
	}

	/**
	 * @inheritdoc
	 * Validates if the HTML element's property is a number within the specific range.
	 */
	validate()
	{
		const value   = this._htmlElement[ this._propertyName ];
		const isValid = this.#_innerValidator.validate( value );

		this.__dispatchValidationEvent( isValid, this.#_innerValidator.constraint, value );

		return isValid;
	}
}
