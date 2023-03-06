'use strict';

import { HttpRequestHeader } from '../HttpRequestHeader.js';

/**
 * Represents the HTTP request header `Upgrade-Insecure-HttpRequests`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class UpgradeInsecureHttpRequestsHttpRequestHeader extends HttpRequestHeader
{
	/**
	 * Represents the name of the HTTP request header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Upgrade-Insecure-HttpRequests';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP request header.
	 */
	constructor( value )
	{
		super( UpgradeInsecureHttpRequestsHttpRequestHeader.NAME, value );
	}
}
