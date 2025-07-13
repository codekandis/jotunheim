'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Content-Disposition`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentDispositionHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Content-Disposition';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ContentDispositionHttpRequestHeader.NAME, value );
	}
}
