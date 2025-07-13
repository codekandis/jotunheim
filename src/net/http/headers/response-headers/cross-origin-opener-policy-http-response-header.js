'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Cross-Origin-Opener-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CrossOriginOpenerPolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Cross-Origin-Opener-Policy';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( CrossOriginOpenerPolicyHttpResponseHeader.NAME, value );
	}
}
