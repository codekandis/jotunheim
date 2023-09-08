'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is an element in a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsOneOfValidator extends AbstractValidator
{
	/**
	 * Stores the constraint of the validation.
	 * @type {String}
	 */
	#_constraint;

	/**
	 * @inheritdoc
	 */
	get constraint()
	{
		return this.#_constraint
			?? (
				this.#_constraint = String.format`one of [ ${ 0 } ]`(
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
	 * @type {Collection<*>}
	 */
	#_validValues;

	/**
	 * Constructor method.
	 * @param {...*} validValues The set of valid values.
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

		this._dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
