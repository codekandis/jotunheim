'use strict';

import { Collection } from '../../collections/collection.js';
import { EventManager } from '../../types/event-manager.js';
import { InvalidTypeException } from '../../types/invalid-type-exception.js';
import { AbstractValidator } from './abstract-validator.js';
import { ValidationFailedEventArguments } from './validation-failed-event-arguments.js';
import { ValidationFailedEvent } from './validation-failed-event.js';
import { ValidationSucceededEvent } from './validation-succeeded-event.js';
import { ValidationsFailedEventArguments } from './validations-failed-event-arguments.js';
import { ValidationsFailedEvent } from './validations-failed-event.js';
import { ValidationsSucceededEvent } from './validations-succeeded-event.js';

/**
 * Represents the handler of any validator chain validator iteration.
 * @callback ValidatorChain_ValidatorIterationHandler
 * @param {AbstractValidator} validator The currently iterated validator.
 * @param {Number} validatorIndex The index of the currently iterated validator.
 */

/**
 * Represents a collection of chained validators.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidatorChain extends AbstractValidator
{
	/**
	 * Stores the validators of the validator chain.
	 * @type {AbstractValidator[]}
	 */
	#_validators = [];

	/**
	 * Stores the error messages of the validation.
	 * @type {Collection<String>}
	 */
	#_errorMessages = new Collection();

	/**
	 * Constructor method.
	 * @param {...AbstractValidator} validators The initital validators of the validator chain.
	 */
	constructor( ...validators )
	{
		super();

		this.add( ...validators );
	}

	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return String.format`{ ${ 0 } }`(
			this.#_validators.joinMapped(
				'; ',
				( fetchedValidator ) =>
				{
					return fetchedValidator.constraint;
				}
			)
		);
	}

	/**
	 * Gets the validation failed event.
	 * @type {Function}
	 */
	get validationFailedEvent()
	{
		return new EventManager( ValidationFailedEvent, this );
	}

	/**
	 * Gets the validation succeeded event.
	 * @type {Function}
	 */
	get validationSucceededEvent()
	{
		return new EventManager( ValidationSucceededEvent, this );
	}

	/**
	 * Gets the validations failed event.
	 * @type {Function}
	 */
	get validationsFailedEvent()
	{
		return new EventManager( ValidationsFailedEvent, this );
	}

	/**
	 * Gets the validations succeeded event.
	 * @type {Function}
	 */
	get validationsSucceededEvent()
	{
		return new EventManager( ValidationsSucceededEvent, this );
	}

	/**
	 * Gets the iterator to iterate over any validator chain's validator.
	 * @returns {IterableIterator<*>} The iterator to iterate over any validator chain's validator.
	 */
	* #validators()
	{
		const validators = this.#_validators;
		for ( const validator of validators )
		{
			yield validator;
		}
	}

	/**
	 * Gets the iterator to iterate over any validator chain's item.
	 * @returns {IterableIterator<*>} The iterator to iterate over any validator chain's item.
	 */
	[ Symbol.iterator ]()
	{
		return this.#validators();
	}

	/**
	 * Static constructor method.
	 * @param {...AbstractValidator[]} arrays The arrays to create the validator chain from.
	 * @returns {ValidatorChain} The created validator chain.
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

		const validatorChain = new ValidatorChain();
		arrays.forEach(
			( fetchedArray ) =>
			{
				validatorChain.add( ...fetchedArray );
			}
		);

		return validatorChain;
	}

	/**
	 * Invokes a specific iteration handler on every validator chain's validator.
	 * @param {ValidatorChain_ValidatorIterationHandler} iterationHandler The iteration handler to invoke.
	 */
	forEach( iterationHandler )
	{
		this.#_validators.forEach( iterationHandler );
	}

	/**
	 * Adds a variadic amount of validators to the validator chain.
	 * @param {...AbstractValidator} validators The validators to add.
	 */
	add( ...validators )
	{
		this.#_validators.add( ...validators );
	}

	/**
	 * Validates a value.
	 * @param {*} value The value to validate.
	 * @returns {Boolean} True if the value is valid, otherwise false.
	 */
	validate( value )
	{
		this.#_errorMessages.clear();

		let isValid = true;
		this.#_validators.forEach(
			( fetchedValidator ) =>
			{
				fetchedValidator.validationFailedEvent( this.#validator_validationFailed );
				fetchedValidator.validationSucceededEvent( this.#validator_validationSucceeded );

				isValid = fetchedValidator.validate( value ) && isValid;

				fetchedValidator.validationSucceededEvent.remove( this.#validator_validationSucceeded );
				fetchedValidator.validationFailedEvent.remove( this.#validator_validationFailed );
			}
		);

		if ( false === isValid )
		{
			const eventArguments = new ValidationsFailedEventArguments(
				new Collection( ...this.#_errorMessages )
			);

			this.validationsFailedEvent.dispatch( eventArguments );
		}
		else
		{
			this.validationsSucceededEvent.dispatch();
		}

		return isValid;
	}

	/**
	 * Handles the validation failed event of every validator.
	 * @param {ValidationFailedEvent} event
	 * @param {ValidationFailedEventArguments} event.detail.eventArguments
	 */
	#validator_validationFailed = ( event ) =>
	{
		this.#_errorMessages.add( event.detail.eventArguments.errorMessage );

		const eventArguments = new ValidationFailedEventArguments( event.detail.eventArguments.errorMessage );
		this.validationFailedEvent.dispatch( eventArguments );
	};

	/**
	 * Handles the validation succeeded event of every validator.
	 * @param {ValidationsSucceededEvent} event
	 * @param {EventArguments} event.detail.eventArguments
	 */
	#validator_validationSucceeded = ( event ) =>
	{
		this.validationSucceededEvent.dispatch();
	};
}
