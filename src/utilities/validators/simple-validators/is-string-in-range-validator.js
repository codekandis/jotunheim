'use strict';

import { InvalidArgumentException } from '../../../types/invalid-argument-exception.js';
import { AbstractValidator } from '../abstract-validator.js';

/**
 * Represents a validator validating if a value is a string within a specific range.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsStringInRangeValidator extends AbstractValidator
{
	/**
	 * Stores the minimum value of the range.
	 * @type {?string}
	 */
	#_minValue;

	/**
	 * Stores the maximum value of the range.
	 * @type {?string}
	 */
	#_maxValue;

	/**
	 * Stores true if the minimum and maximum values are included in the range, otherwise false.
	 * @type {boolean}
	 */
	#_isInclusive;

	/**
	 * Constructor method.
	 * @param {?string} minValue The minimum value of the range. If set to null only the maximum value will be consifered during validation.
	 * @param {?string} maxValue The maximum value of the range. If set to null only the minimum value will be consifered during validation.
	 * @param {boolean} isInclusive True if the minimum and maximum values are included in the range, otherwise false.
	 * @throws InvalidArgumentException Either one of `minValue` or `maxValue` can be null.
	 * @throws InvalidArgumentException `minValue` cannot be greater than `maxValue`.
	 */
	constructor( minValue, maxValue, isInclusive )
	{
		super();

		if ( null === minValue && null === maxValue )
		{
			throw new InvalidArgumentException( 'Either one of `minValue` or `maxValue` can be null.' );
		}

		if ( minValue === maxValue )
		{
			throw new InvalidArgumentException( '`minValue` and `maxValue` must not be equal.' );
		}

		if ( true === minValue.isGreaterThan( maxValue ) )
		{
			throw new InvalidArgumentException( '`minValue` cannot be greater than `maxValue`.' );
		}

		this.#_minValue    = minValue;
		this.#_maxValue    = maxValue;
		this.#_isInclusive = isInclusive;
	}

	/**
	 * @override
	 * @inheritdoc
	 */
	get constraint()
	{
		const operator = false === this.#_isInclusive
			? '<'
			: '<=';

		return String.format`${ 0 }string${ 1 }`(
			null === this.#_minValue
				? String.empty
				: String.format`${ 0 } ${ 1 } `( this.#_minValue, operator ),
			null === this.#_maxValue
				? String.empty
				: String.format` ${ 1 } ${ 0 }`( this.#_maxValue, operator )
		);
	}

	/**
	 * @inheritdoc
	 * Validates if a specific value is a string within the specific range.
	 */
	validate( value )
	{
		const isValid = 'string' === typeof value
			&& (
				null === this.#_minValue
					? true
					: (
						false === this.#_isInclusive
							? true === value.isLowerThan( this.#_minValue )
							: true === value.isLowerThanOrEqualTo( this.#_minValue )
					)
			)
			&& (
				null === this.#_maxValue
					? true
					: (
						false === this.#_isInclusive
							? true === value.isGreaterThan( this.#_maxValue )
							: true === value.isGreaterThanOrEqualTo( this.#_maxValue )
					)
			);
		this.__dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
