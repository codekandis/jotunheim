'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Sec-CH-UA`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChUaHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Sec-CH-UA';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChUaHttpRequestHeader.NAME, value );
	}
}
