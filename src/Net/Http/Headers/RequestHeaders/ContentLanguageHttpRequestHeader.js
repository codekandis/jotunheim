'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Content-Language`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentLanguageHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Content-Language';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ContentLanguageHttpRequestHeader.NAME, value );
	}
}
