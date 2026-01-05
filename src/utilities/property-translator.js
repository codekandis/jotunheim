`use strict`;

import { Abstract } from '../types/abstract.js';
import { ValueIsNotAClassException } from '../types/value-is-not-a-class-exception.js';
import { PropertyValueNotFoundException } from './property-value-not-found-exception.js';

/**
 * Represents a property translator translating a property value from one class into a property value of another class.
 * @author Christian Ramelow <info@codekandis.net>
 * @template TConstantsClass
 */
export class PropertyTranslator extends Abstract
{
	/**
	 * Stores the input class.
	 * @type {function(new:TConstantsClass, ...any): TConstantsClass}
	 */
	#_inputClass;

	/**
	 * Stores the output class.
	 * @type {function(new:TConstantsClass, ...any): TConstantsClass}
	 */
	#_outputClass;

	/**
	 * Constructor method.
	 * @param {function(new:TConstantsClass, ...any): TConstantsClass} inputClass The input class.
	 * @param {function(new:TConstantsClass, ...any): TConstantsClass} outputClass The output class.
	 */
	constructor( inputClass, outputClass )
	{
		super();

		if ( 'function' !== typeof ( inputClass ) || false === inputClass.isClass() )
		{
			throw new ValueIsNotAClassException();
		}

		if ( 'function' !== typeof ( outputClass ) || false === outputClass.isClass() )
		{
			throw new ValueIsNotAClassException();
		}

		this.#_inputClass  = inputClass;
		this.#_outputClass = outputClass;
	}

	/**
	 * Translates a property value into its corresponding property value.
	 * @param {null|boolean|number|string|array} propertyValue The property value to translate.
	 * @returns {null|boolean|number|string|array} The corresponding property value.
	 */
	translate( propertyValue )
	{
		const inputClassPropertyDescriptors = Object.getOwnPropertyDescriptors( this.#_inputClass );
		const inputClassPropertyName        = Object
			.keys( inputClassPropertyDescriptors )
			.filter(
				( propertyName ) => inputClassPropertyDescriptors[ propertyName ].hasOwnProperty( 'get' )
			)
			.find(
				( propertyName ) => inputClassPropertyDescriptors[ propertyName ][ 'get' ]() === propertyValue
			);

		if ( undefined === inputClassPropertyName )
		{
			throw PropertyValueNotFoundException.with_propertyValue( propertyValue )
		}

		const outputClassPropertyDescriptors = Object.getOwnPropertyDescriptors( this.#_outputClass );
		const outputClassPropertyName        = Object
			.keys( outputClassPropertyDescriptors )
			.filter(
				( propertyName ) => outputClassPropertyDescriptors[ propertyName ].hasOwnProperty( 'get' )
			)
			.find(
				( propertyName ) => propertyName === inputClassPropertyName
			);

		if ( undefined === outputClassPropertyName )
		{
			throw PropertyValueNotFoundException.with_propertyValue( propertyValue )
		}

		return this.#_outputClass[ outputClassPropertyName ];
	}
}
