'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `DPR`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DprHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'DPR';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( DprHttpRequestHeader.NAME, value );
	}
}
