'use strict';

import { Collection } from '../../../collections/collection.js';
import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is an element in a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsOneOfValidator extends AbstractValidator
{
	/**
	 * Stores the constraint of the validation.
	 * @type {string}
	 */
	#_constraint;

	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		const constraint = String.format`one of [ ${ 0 } ]`;

		return this.#_constraint
			?? (
				this.#_constraint = constraint(
					this.#_validValues.joinMapped(
						', ',
						( fetchedValidValue ) =>
						{
							return String.format`'${ 0 }'`(
								fetchedValidValue.toString()
							);
						}
					)
				)
			);
	}

	/**
	 * Stores the valid values.
	 * @type {Collection<any>}
	 */
	#_validValues;

	/**
	 * Constructor method.
	 * @param {...any} validValues The set of valid values.
	 */
	constructor( ...validValues )
	{
		super();

		this.#_validValues = new Collection( ...validValues );
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is an element in the set of valid values.
	 */
	validate( value )
	{
		const isValid = undefined !== this
			.#_validValues
			.findFirstOrUndefinedBy(
				( fetchedValidValue ) =>
				{
					return value === fetchedValidValue;
				}
			);
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
