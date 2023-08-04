'use strict';

import { HttpResponseHeader } from '../HttpResponseHeader.js';

/**
 * Represents the HTTP response header `Cross-Origin-Resource-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CrossOriginResourcePolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {String}
	 */
	static get NAME()
	{
		return 'Cross-Origin-Resource-Policy';
	}

	/**
	 * Constructor method.
	 * @param {String} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( CrossOriginResourcePolicyHttpResponseHeader.NAME, value );
	}
}
