'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `If-Match`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IfMatchHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'If-Match';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( IfMatchHttpRequestHeader.NAME, value );
	}
}
