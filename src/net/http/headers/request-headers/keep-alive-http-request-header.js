'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Keep-Alive`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class KeepAliveHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Keep-Alive';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( KeepAliveHttpRequestHeader.NAME, value );
	}
}
