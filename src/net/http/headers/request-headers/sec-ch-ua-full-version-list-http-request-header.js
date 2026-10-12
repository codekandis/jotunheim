'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Sec-CH-UA-Full-Version-List`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChUaFullVersionListHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Sec-CH-UA-Full-Version-List';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChUaFullVersionListHttpRequestHeader.NAME, value );
	}
}
