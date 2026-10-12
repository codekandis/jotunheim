'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Sec-CH-Prefers-Reduced-Motion`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecChPrefersReducedMotionHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Sec-CH-Prefers-Reduced-Motion';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( SecChPrefersReducedMotionHttpRequestHeader.NAME, value );
	}
}
