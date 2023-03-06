'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Content-Security-Policy-Report-Only`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentSecurityPolicyReportOnlyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Content-Security-Policy-Report-Only';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( ContentSecurityPolicyReportOnlyHttpResponseHeader.NAME, value );
	}
}
