'use strict';

import { HttpArgument } from './http-argument.js';

/**
 * Represents an HTTP GET argument.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpGetArgument extends HttpArgument
{
	/**
	 * Constructor method.
	 * @param {string} name The name of the HTTP GET argument.
	 * @param {string} value The value of the HTTP GET argument.
	 */
	constructor( name, value )
	{
		super( name, value );
	}

	/**
	 * Static constructor method.
	 * @param {HttpGetArgument} httpGetArgument The HTTP GET argument to create the HTTP GET argument from.
	 * @returns {HttpGetArgument}
	 * @constructor
	 */
	static fromHttpGetArgument( httpGetArgument )
	{
		return new this( httpGetArgument.name, httpGetArgument.value )
	}
}
