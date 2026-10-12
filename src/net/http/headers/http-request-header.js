'use strict';

import { HttpHeader } from './http-header.js';

/**
 * Represents an HTTP request header.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestHeader extends HttpHeader
{
	/**
	 * Constructor method.
	 * @param {string} name The name of the HTTP request header.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( name, value )
	{
		super( name, value );
	}

	/**
	 * Static constructor method.
	 * @param {HttpRequestHeader} httpRequestHeader The request header to create the HTTP request header from.
	 * @returns {HttpRequestHeader}
	 * @constructor
	 */
	static from_httpRequestHeader( httpRequestHeader )
	{
		return new this( httpRequestHeader.name, httpRequestHeader.value );
	}
}
