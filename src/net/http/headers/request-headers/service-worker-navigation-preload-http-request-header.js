'use strict';

import { HttpRequestHeader } from '../http-request-header.js';

/**
 * Represents the HTTP request header `Service-Worker-Navigation-Preload`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ServiceWorkerNavigationPreloadHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Service-Worker-Navigation-Preload';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( ServiceWorkerNavigationPreloadHttpRequestHeader.NAME, value );
	}
}
