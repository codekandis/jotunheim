'use strict';

import { Abstract } from '../../../types/abstract.js';
import { HttpArgumentNamePreparator } from './http-argument-name-preparator.js';

/**
 * Represents an HTTP argument.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpArgument extends Abstract
{
	/**
	 * Stores the name of the HTTP argument.
	 * @var {string}
	 */
	#_name;

	/**
	 * Stores the value of the HTTP argument.
	 * @var {string}
	 */
	#_value;

	/**
	 * Constructor method.
	 * @param {string} name The name of the HTTP argument.
	 * @param {string} value The value of the HTTP argument.
	 */
	constructor( name, value )
	{
		super();

		this.#_name  = ( new HttpArgumentNamePreparator() )
			.prepare( name );
		this.#_value = value;
	}

	/**
	 * Static constructor method.
	 * @param {HttpArgument} httpArgument The HTTP argument to create the HTTP argument from.
	 * @returns {HttpArgument}
	 * @constructor
	 */
	static fromHttpArgument( httpArgument )
	{
		return new this( httpArgument.name, httpArgument.value )
	}

	/**
	 * Gets the name of the HTTP argument.
	 * @returns {string} The name of the HTTP argument.
	 */
	get name()
	{
		return this.#_name;
	}

	/**
	 * Gets the value of the HTTP argument.
	 * @returns {string} The value of the HTTP argument.
	 */
	get value()
	{
		return this.#_value;
	}

	/**
	 * Gets the full HTTP argument string of the HTTP argument.
	 * @returns {string} The full HTTP argument string of the HTTP argument.
	 */
	get fullHttpArgumentString()
	{
		return String.format`${ 0 }=${ 1 }`
		(
			encodeURIComponent( this.name ),
			encodeURIComponent( this.value )
		);
	}
}
