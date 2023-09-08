'use strict';

import { Collection } from '../../Collections/Collection.js';
import { Abstract } from '../../Types/Abstract.js';
import { EventManager } from '../../Types/EventManager.js';
import { InvalidTypeException } from '../../Types/InvalidTypeException.js';
import { ObjectPropertyErrorMessagesMapping } from './ObjectPropertyErrorMessagesMapping.js';
import { ObjectPropertyMapping } from './ObjectPropertyMapping.js';
import { ObjectPropertyValidationFailedEvent } from './ObjectPropertyValidationFailedEvent.js';
import { ObjectPropertyValidationFailedEventArguments } from './ObjectPropertyValidationFailedEventArguments.js';
import { ObjectPropertyValidationsFailedEvent } from './ObjectPropertyValidationsFailedEvent.js';
import { ObjectPropertyValidationsFailedEventArguments } from './ObjectPropertyValidationsFailedEventArguments.js';
import { ObjectPropertyValidationsSucceededEvent } from './ObjectPropertyValidationsSucceededEvent.js';
import { ObjectPropertyValidationsSucceededEventArguments } from './ObjectPropertyValidationsSucceededEventArguments.js';
import { ObjectPropertyValidationSucceededEvent } from './ObjectPropertyValidationSucceededEvent.js';
import { ObjectPropertyValidationSucceededEventArguments } from './ObjectPropertyValidationSucceededEventArguments.js';

/**
 * Represents the handler of any object property validator chain validator iteration.
 * @callback ObjectPropertyValidatorChain_ValidatorIterationHandler
 * @param {AbstractObjectPropertyValidator} validator The currently iterated object property validator.
 * @param {Number} validatorIndex The index of the currently iterated object property validator.
 */

/**
 * Represents a collection of chained object property validators.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ObjectPropertyValidatorChain extends Abstract
{
	/**
	 * Stores the object property validators of the object property validator chain.
	 * @type {AbstractObjectPropertyValidator[]}
	 */
	#_objectValidators = [];

	/**
	 * Stores the mappings of validated object properties and validation error messages.
	 * @type {Collection<ObjectPropertyErrorMessagesMapping>}
	 */
	#_objectPropertyErrorMessagesMappings = new Collection();

	/**
	 * Stores the mappings of validated object properties.
	 * @type {Collection<ObjectPropertyMapping>}
	 */
	#_objectPropertyMappings = new Collection();

	/**
	 * Constructor method.
	 * @param {...AbstractObjectPropertyValidator} validators The initital object property validators of the object property validator chain.
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
		return new EventManager( ObjectPropertyValidationFailedEvent, this );
	}

	/**
	 * Gets the validation succeeded event.
	 * @type {Function}
	 */
	get validationSucceededEvent()
	{
		return new EventManager( ObjectPropertyValidationSucceededEvent, this );
	}

	/**
	 * Gets the validations failed event.
	 * @type {Function}
	 */
	get validationsFailedEvent()
	{
		return new EventManager( ObjectPropertyValidationsFailedEvent, this );
	}

	/**
	 * Gets the validations succeeded event.
	 * @type {Function}
	 */
	get validationsSucceededEvent()
	{
		return new EventManager( ObjectPropertyValidationsSucceededEvent, this );
	}

	/**
	 * Gets the iterator to iterate over any object property validator chain's object property validator.
	 * @returns {IterableIterator<*>} The iterator to iterate over any object property validator chain's object property validator.
	 */
	* #validators()
	{
		const validators = this.#_objectValidators;
		for ( const validator of validators )
		{
			yield validator;
		}
	}

	/**
	 * Gets the iterator to iterate over any object property validator chain's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any object property validator chain's item.
	 */
	[ Symbol.iterator ]()
	{
		return this.#validators();
	}

	/**
	 * Static constructor method.
	 * @param {...AbstractObjectPropertyValidator[]} arrays The arrays to create the object property validator chain from.
	 * @returns {ObjectPropertyValidatorChain} The created object property validator chain.
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

		const objectValidatorChain = new ObjectPropertyValidatorChain();
		arrays.forEach(
			( fetchedArray ) =>
			{
				objectValidatorChain.add( ...fetchedArray );
			}
		);

		return objectValidatorChain;
	}

	/**
	 * Invokes a specific iteration handler on every object property validator chain's validator.
	 * @param {ObjectPropertyValidatorChain_ValidatorIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		this.#_objectValidators.forEach( iterationHandler );
	}

	/**
	 * Adds a variadic amount of object property validators to the object property validator chain.
	 * @param {...AbstractObjectPropertyValidator} validators The object property validators to add.
	 */
	add( ...validators )
	{
		this.#_objectValidators.add( ...validators );
	}

	/**
	 * Validates the property of the object.
	 * @returns {Boolean} True if the property's value is valid, otherwise false.
	 */
	validate()
	{
		this.#_objectPropertyErrorMessagesMappings.clear();
		this.#_objectPropertyMappings.clear();

		let isValid = true;
		this.#_objectValidators.forEach(
			( fetchedValidator ) =>
			{
				fetchedValidator.validationFailedEvent( this.#objectPropertyValidator_validationFailed );
				fetchedValidator.validationSucceededEvent( this.#objectPropertyValidator_validationSucceeded );

				isValid = fetchedValidator.validate() && isValid;

				fetchedValidator.validationSucceededEvent.remove( this.#objectPropertyValidator_validationSucceeded );
				fetchedValidator.validationFailedEvent.remove( this.#objectPropertyValidator_validationFailed );
			}
		);

		if ( false === isValid )
		{
			const eventArguments = new ObjectPropertyValidationsFailedEventArguments(
				new Collection( ...this.#_objectPropertyErrorMessagesMappings )
			);
			this.validationsFailedEvent.dispatch( eventArguments );
		}
		else
		{
			const eventArguments = new ObjectPropertyValidationsSucceededEventArguments(
				new Collection( ...this.#_objectPropertyMappings )
			);
			this.validationsSucceededEvent.dispatch( eventArguments );
		}

		return isValid;
	}

	/**
	 * Handles the validation failed event of every object property validator.
	 * @param {ObjectPropertyValidationFailedEvent} event
	 * @param {ObjectPropertyValidationFailedEventArguments} event.detail.eventArguments
	 */
	#objectPropertyValidator_validationFailed = ( event ) =>
	{
		let objectPropertyErrorMessagesMapping = this.#_objectPropertyErrorMessagesMappings.findFirstOrUndefinedBy(
			( fetchedObjectPropertyErrorMessagesMapping ) =>
			{
				return fetchedObjectPropertyErrorMessagesMapping.object === event.detail.eventArguments.object && fetchedObjectPropertyErrorMessagesMapping.propertyName === event.detail.eventArguments.propertyName;
			}
		);

		if ( undefined === objectPropertyErrorMessagesMapping )
		{
			objectPropertyErrorMessagesMapping = new ObjectPropertyErrorMessagesMapping(
				event.detail.eventArguments.object,
				event.detail.eventArguments.propertyName,
				new Collection()
			);
			this.#_objectPropertyErrorMessagesMappings.add( objectPropertyErrorMessagesMapping );
		}

		objectPropertyErrorMessagesMapping.errorMessages.add( event.detail.eventArguments.errorMessage );

		const eventArguments = new ObjectPropertyValidationFailedEventArguments( event.detail.eventArguments.object, event.detail.eventArguments.propertyName, event.detail.eventArguments.errorMessage );
		this.validationFailedEvent.dispatch( eventArguments );
	};

	/**
	 * Handles the validation succeeded event of every object property validator.
	 * @param {ObjectPropertyValidationSucceededEvent} event
	 * @param {ObjectPropertyValidationSucceededEventArguments} event.detail.eventArguments
	 */
	#objectPropertyValidator_validationSucceeded = ( event ) =>
	{
		let objectPropertyMapping = this.#_objectPropertyMappings.findFirstOrUndefinedBy(
			( fetchedObjectPropertyMapping ) =>
			{
				return fetchedObjectPropertyMapping.object === event.detail.eventArguments.object && fetchedObjectPropertyMapping.propertyName === event.detail.eventArguments.propertyName;
			}
		);

		if ( undefined === objectPropertyMapping )
		{
			objectPropertyMapping = new ObjectPropertyMapping(
				event.detail.eventArguments.object,
				event.detail.eventArguments.propertyName
			);
			this.#_objectPropertyMappings.add( objectPropertyMapping );
		}

		const eventArguments = new ObjectPropertyValidationSucceededEventArguments( event.detail.eventArguments.object, event.detail.eventArguments.propertyName );
		this.validationSucceededEvent.dispatch( eventArguments );
	};
}
