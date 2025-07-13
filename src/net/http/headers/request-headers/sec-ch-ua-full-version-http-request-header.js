'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Sec-CH-UA-Full-Version`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChUaFullVersionHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Sec-CH-UA-Full-Version';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChUaFullVersionHttpRequestHeader.NAME, value );
	}
}
