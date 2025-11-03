'use strict';

import { Abstract } from '../../types/abstract.js';
import { EventManager } from '../../types/event-manager.js';
import { InvalidPropertyException } from '../../types/invalid-property-exception.js';
import { NotImplementedException } from '../../types/not-implemented-exception.js';
import { HtmlElementValidationFailedEventArguments } from './html-element-validation-failed-event-arguments.js';
import { HtmlElementValidationFailedEvent } from './html-element-validation-failed-event.js';
import { HtmlElementValidationSucceededEventArguments } from './html-element-validation-succeeded-event-arguments.js';
import { HtmlElementValidationSucceededEvent } from './html-element-validation-succeeded-event.js';

/**
 * Represents base class of any HTML element validator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractHtmlElementValidator extends Abstract
{
	/**
	 * Represents the error message if a value is invalid.
	 * @type {String_ReplacementHandler}
	 */
	static get __ERROR_INVALID_VALUE()
	{
		return String.format`Invalid value. \`${ 0 }\` expected.`;
	}

	/**
	 * Represents the error message if a value is invalid containing the value itself.
	 * @type {String_ReplacementHandler}
	 */
	static get __ERROR_INVALID_VALUE_WITH_VALUE()
	{
		return String.format`Invalid value \`${ 1 }\`. \`${ 0 }\` expected.`;
	}

	/**
	 * Stores the HTML element to validate.
	 * @type {HTMLElement}
	 */
	#_htmlElement;

	/**
	 * Stores the name of the HTML element's property to validate.
	 * @type {string}
	 */
	#_propertyName;

	/**
	 * Constructor method.
	 * @param {HTMLElement} htmlElement The HTML element to validate.
	 * @param {string} propertyName The name of the HTML element's property to validate.
	 * @throws {InvalidPropertyException} The HTML element's property does not exist.
	 */
	constructor( htmlElement, propertyName )
	{
		super();

		if ( false === htmlElement.hasProperty( propertyName ) )
		{
			throw InvalidPropertyException.with_property( propertyName );
		}

		this.#_htmlElement  = htmlElement;
		this.#_propertyName = propertyName;
	}

	/**
	 * Stores the HTML element to validate.
	 * @returns {HTMLElement} The HTML element to validate.
	 */
	get _htmlElement()
	{
		return this.#_htmlElement;
	}

	/**
	 * Stores the name of the HTML element's property to validate.
	 * @returns {string} The name of the HTML element's property to validate.
	 */
	get _propertyName()
	{
		return this.#_propertyName;
	}

	/**
	 * Gets the constaint of the validation.
	 * @return {string} The constraint of the validation.
	 * @throws
	 */
	get constraint()
	{
		throw NotImplementedException.with_abstractConstant( this, 'constraint' );
	}

	/**
	 * Gets the validation failed event.
	 * @type {Function}
	 */
	get validationFailedEvent()
	{
		return new EventManager( HtmlElementValidationFailedEvent, this );
	}

	/**
	 * Gets the validation succeeded event.
	 * @type {Function}
	 */
	get validationSucceededEvent()
	{
		return new EventManager( HtmlElementValidationSucceededEvent, this );
	}

	/**
	 * Dispatches the appropriate validation event based on a specific validation result.
	 * @param {boolean} isValid True if the value is valid, otherwise false.
	 * @param {string} expectedConstraint The expected constraint.
	 * @param {any} value The validated value.
	 */
	__dispatchValidationEvent( isValid, expectedConstraint, value = undefined )
	{
		if ( false === isValid )
		{
			const eventArguments = new HtmlElementValidationFailedEventArguments(
				this.#_htmlElement,
				undefined === value
					? this.constructor.__ERROR_INVALID_VALUE( expectedConstraint )
					: this.constructor.__ERROR_INVALID_VALUE_WITH_VALUE( expectedConstraint, value )
			);
			this.validationFailedEvent.dispatch( eventArguments );

			return;
		}

		this.validationSucceededEvent.dispatch(
			new HtmlElementValidationSucceededEventArguments( this.#_htmlElement )
		);
	}

	/**
	 * Validates the HTML element's property.
	 * @returns {boolean} True if the HTML element's property is valid, otherwise false.
	 */
	validate()
	{
		throw NotImplementedException.with_abstractMethod( this, 'validate' );
	}
}
