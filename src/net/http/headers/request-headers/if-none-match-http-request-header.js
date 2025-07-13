'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `If-None-Match`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class IfNoneMatchHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'If-None-Match';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( IfNoneMatchHttpRequestHeader.NAME, value );
	}
}
