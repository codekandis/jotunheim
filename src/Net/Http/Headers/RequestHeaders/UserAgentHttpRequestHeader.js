'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `User-Agent`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class UserAgentHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'User-Agent';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( UserAgentHttpRequestHeader.NAME, value );
	}
}
