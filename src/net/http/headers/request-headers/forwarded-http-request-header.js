'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Forwarded`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ForwardedHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Forwarded';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ForwardedHttpRequestHeader.NAME, value );
	}
}
