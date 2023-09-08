'use strict';

import { InvalidArgumentException } from '../../../Types/InvalidArgumentException.js';
import { AbstractValidator } from '../AbstractValidator.js';

/**
 * Represents a validator validating if a value is a number within a specific range.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IsNumberInRangeValidator extends AbstractValidator
{
	/**
	 * Stores the minimum value of the range.
	 * @type {?Number}
	 */
	#_minValue;

	/**
	 * Stores the maximum value of the range.
	 * @type {?Number}
	 */
	#_maxValue;

	/**
	 * Stores true if the minimum and maximum values are included in the range, otherwise false.
	 * @type {Boolean}
	 */
	#_isInclusive;

	/**
	 * Constructor method.
	 * @param {?Number} minValue The minimum value of the range. If set to null only the maximum value will be consifered during validation.
	 * @param {?Number} maxValue The maximum value of the range. If set to null only the minimum value will be consifered during validation.
	 * @param {Boolean} isInclusive True if the minimum and maximum values are included in the range, otherwise false.
	 * @throws {InvalidArgumentException} Either one of `minValue` or `maxValue` can be null.
	 * @throws {InvalidArgumentException} `minValue` cannot be greater than `maxValue`.
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

		if ( null !== minValue && null !== maxValue && minValue > maxValue )
		{
			throw new InvalidArgumentException( '`maxValue` must be greater than `minValue`.' );
		}

		this.#_minValue    = minValue;
		this.#_maxValue    = maxValue;
		this.#_isInclusive = isInclusive;
	}

	/**
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
	 * Validates if a specific value is a number within the specific range.
	 */
	validate( value )
	{
		const isValid = 'number' === typeof value
			&& (
				null === this.#_minValue
					? true
					: (
						false === this.#_isInclusive
							? value > this.#_minValue
							: value >= this.#_minValue
					)
			)
			&& (
				null === this.#_maxValue
					? true
					: (
						false === this.#_isInclusive
							? value < this.#_maxValue
							: value <= this.#_maxValue
					)
			);

		this._dispatchValidationEvent( isValid, this.constraint, value );

		return isValid;
	}
}
