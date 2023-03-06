'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Sec-Fetch-Site`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecFetchSiteHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Sec-Fetch-Site';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecFetchSiteHttpRequestHeader.NAME, value );
	}
}
