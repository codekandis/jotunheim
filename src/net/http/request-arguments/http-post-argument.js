'use strict';

import { HttpArgument } from './http-argument.js';

/**
 * Represents an HTTP POST argument.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostArgument extends HttpArgument
{
	/**
	 * Constructor method.
	 * @param {string} name The name of the HTTP POST argument.
	 * @param {string} value The value of the HTTP POST argument.
	 */
	constructor( name, value )
	{
		super( name, value );
	}

	/**
	 * Static constructor method.
	 * @param {HttpPostArgument} httpPostArgument The HTTP POST argument to create the HTTP POST argument from.
	 * @returns {HttpPostArgument}
	 * @constructor
	 */
	static fromHttpPostArgument( httpPostArgument )
	{
		return new this( httpPostArgument.name, httpPostArgument.value )
	}
}
