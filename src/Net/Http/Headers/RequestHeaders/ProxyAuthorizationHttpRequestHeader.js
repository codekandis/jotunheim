'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Proxy-Authorization`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ProxyAuthorizationHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Proxy-Authorization';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ProxyAuthorizationHttpRequestHeader.NAME, value );
	}
}
