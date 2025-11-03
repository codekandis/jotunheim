'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Feature-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FeaturePolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Feature-Policy';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( FeaturePolicyHttpResponseHeader.NAME, value );
	}
}
