'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Accept-Language`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AcceptLanguageHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Accept-Language';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( AcceptLanguageHttpRequestHeader.NAME, value );
	}
}
