'use strict';

import { Collection } from '../../Collections/Collection.js';
import { Abstract } from '../../Types/Abstract.js';
import { EventManager } from '../../Types/EventManager.js';
import { InvalidTypeException } from '../../Types/InvalidTypeException.js';
import { AbstractHtmlElementValidator } from './AbstractHtmlElementValidator.js';
import { HtmlElementErrorMessagesMapping } from './HtmlElementErrorMessagesMapping.js';
import { HtmlElementValidationFailedEvent } from './HtmlElementValidationFailedEvent.js';
import { HtmlElementValidationFailedEventArguments } from './HtmlElementValidationFailedEventArguments.js';
import { HtmlElementValidationsFailedEvent } from './HtmlElementValidationsFailedEvent.js';
import { HtmlElementValidationsFailedEventArguments } from './HtmlElementValidationsFailedEventArguments.js';
import { HtmlElementValidationsSucceededEvent } from './HtmlElementValidationsSucceededEvent.js';
import { HtmlElementValidationsSucceededEventArguments } from './HtmlElementValidationsSucceededEventArguments.js';
import { HtmlElementValidationSucceededEvent } from './HtmlElementValidationSucceededEvent.js';
import { HtmlElementValidationSucceededEventArguments } from './HtmlElementValidationSucceededEventArguments.js';

/**
 * Represents the handler of any HTML element validator chain validator iteration.
 * @callback HtmlElementValidatorChain_ValidatorIterationHandler
 * @param {AbstractHtmlElementValidator} validator The currently iterated HTML element validator.
 * @param {Number} validatorIndex The index of the currently iterated HTML element validator.
 */

/**
 * Represents a collection of chained HTML element validators.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidatorChain extends Abstract
{
	/**
	 * Stores the HTML element validators of the HTML element validator chain.
	 * @type {AbstractHtmlElementValidator[]}
	 */
	#_htmlElementValidators = [];

	/**
	 * Stores the mappings of validated HTML elements and validation error messages.
	 * @type {Collection<HtmlElementErrorMessagesMapping>}
	 */
	#_htmlElementErrorMessagesMappings = new Collection();

	/**
	 * Constructor method.
	 * @param {...AbstractHtmlElementValidator} validators The initital HTML element validators of the HTML element validator chain.
	 */
	constructor( ...validators )
	{
		super();

		this.add( ...validators );
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
	 * Gets the validations failed event.
	 * @type {Function}
	 */
	get validationsFailedEvent()
	{
		return new EventManager( HtmlElementValidationsFailedEvent, this );
	}

	/**
	 * Gets the validations succeeded event.
	 * @type {Function}
	 */
	get validationsSucceededEvent()
	{
		return new EventManager( HtmlElementValidationsSucceededEvent, this );
	}

	/**
	 * Gets the iterator to iterate over any HTML element validator chain's HTML element validator.
	 * @returns {IterableIterator<*>} The iterator to iterate over any HTML element validator chain's HTML element validator.
	 */
	* #validators()
	{
		const validators = this.#_htmlElementValidators;
		for ( const validator of validators )
		{
			yield validator;
		}
	}

	/**
	 * Gets the iterator to iterate over any HTML element validator chain's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any HTML element validator chain's item.
	 */
	[ Symbol.iterator ]()
	{
		return this.#validators();
	}

	/**
	 * Static constructor method.
	 * @param {...AbstractHtmlElementValidator[]} arrays The arrays to create the HTML element validator chain from.
	 * @returns {HtmlElementValidatorChain} The created HTML element validator chain.
	 * @throws {InvalidTypeException} The type of at least one of the passed arrays is not `array`.
	 * @constructor
	 */
	static fromArray( ...arrays )
	{
		arrays.forEach(
			( fetchedArray ) =>
			{
				if ( false === Array.isArray( fetchedArray ) )
				{
					throw InvalidTypeException.with_type( 'array', typeof fetchedArray );
				}
			}
		);

		const htmlElementValidatorChain = new HtmlElementValidatorChain();
		arrays.forEach(
			( fetchedArray ) =>
			{
				htmlElementValidatorChain.add( ...fetchedArray );
			}
		);

		return htmlElementValidatorChain;
	}

	/**
	 * Invokes a specific iteration handler on every HTML element validator chain's validator.
	 * @param {HtmlElementValidatorChain_ValidatorIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		this.#_htmlElementValidators.forEach( iterationHandler );
	}

	/**
	 * Adds a variadic amount of HTML element validators to the HTML element validator chain.
	 * @param {...AbstractHtmlElementValidator} validators The HTML element validators to add.
	 */
	add( ...validators )
	{
		this.#_htmlElementValidators.add( ...validators );
	}

	/**
	 * Validates the property of the HTML element.
	 * @returns {Boolean} True if the property's value is valid, otherwise false.
	 */
	validate()
	{
		this.#_htmlElementErrorMessagesMappings.clear();

		let isValid = true;
		this.#_htmlElementValidators.forEach(
			( fetchedValidator ) =>
			{
				fetchedValidator.validationFailedEvent( this.#htmlElementValidator_validationFailed );
				fetchedValidator.validationSucceededEvent( this.#htmlElementValidator_validationSucceeded );

				isValid = fetchedValidator.validate() && isValid;

				fetchedValidator.validationSucceededEvent.remove( this.#htmlElementValidator_validationSucceeded );
				fetchedValidator.validationFailedEvent.remove( this.#htmlElementValidator_validationFailed );
			}
		);

		if ( false === isValid )
		{
			const eventArguments = new HtmlElementValidationsFailedEventArguments(
				new Collection( ...this.#_htmlElementErrorMessagesMappings )
			);

			this.validationsFailedEvent.dispatch( eventArguments );
		}
		else
		{
			const eventArguments = new HtmlElementValidationsSucceededEventArguments(
				this.#_htmlElementErrorMessagesMappings
					.map(
						( fetchedHtmlElementErrorMessagesMapping ) =>
						{
							return fetchedHtmlElementErrorMessagesMapping.htmlElement;
						}
					)
			);

			this.validationsSucceededEvent.dispatch( eventArguments );
		}

		return isValid;
	}

	/**
	 * Handles the validation failed event of every HTML element validator.
	 * @param {HtmlElementValidationFailedEvent} event
	 * @param {HtmlElementValidationFailedEventArguments} event.detail.eventArguments
	 */
	#htmlElementValidator_validationFailed = ( event ) =>
	{
		let htmlElementErrorMessagesMapping = this.#_htmlElementErrorMessagesMappings.findFirstOrUndefinedBy(
			( fetchedHtmlElementErrorMessagesMapping ) =>
			{
				return fetchedHtmlElementErrorMessagesMapping.htmlElement === event.detail.eventArguments.htmlElement;
			}
		);

		if ( undefined === htmlElementErrorMessagesMapping )
		{
			htmlElementErrorMessagesMapping = new HtmlElementErrorMessagesMapping(
				event.detail.eventArguments.htmlElement,
				new Collection()
			);
			this.#_htmlElementErrorMessagesMappings.add( htmlElementErrorMessagesMapping );
		}

		htmlElementErrorMessagesMapping.errorMessages.add( event.detail.eventArguments.errorMessage );

		const eventArguments = new HtmlElementValidationFailedEventArguments(
			event.detail.eventArguments.htmlElement,
			event.detail.eventArguments.errorMessage
		);

		this.validationFailedEvent.dispatch( eventArguments );
	};

	/**
	 * Handles the validation succeeded event of every HTML element validator.
	 * @param {HtmlElementValidationSucceededEvent} event
	 * @param {HtmlElementValidationSucceededEventArguments} event.detail.eventArguments
	 */
	#htmlElementValidator_validationSucceeded = ( event ) =>
	{
		const eventArguments = new HtmlElementValidationSucceededEventArguments(
			event.detail.eventArguments.htmlElement
		);

		this.validationSucceededEvent.dispatch( eventArguments );
	};
}
