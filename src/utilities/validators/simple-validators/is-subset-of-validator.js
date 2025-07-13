'use strict';

import { Collection } from '../../../collections/collection.js';
import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a subset of a set of valid values.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsSubsetOfValidator extends AbstractValidator
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
		const constraint = String.format`subset of [ ${ 0 } ]`;

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
	 * Validates if a specific value is a subset of the set of valid values.
	 */
	validate( value )
	{
		let isValid = undefined !== value
			&& null !== value
			&& 'function' === typeof value[ Symbol.iterator ];

		if ( true === isValid )
		{
			[ ...value ].forEach(
				( fetchedValue ) =>
				{
					isValid &&= undefined !== this.#_validValues.findFirstIndexOf( fetchedValue );
				}
			);
		}

		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
