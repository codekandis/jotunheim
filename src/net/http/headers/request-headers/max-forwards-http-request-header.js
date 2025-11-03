'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Max-Forwards`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class MaxForwardsHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Max-Forwards';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( MaxForwardsHttpRequestHeader.NAME, value );
	}
}
