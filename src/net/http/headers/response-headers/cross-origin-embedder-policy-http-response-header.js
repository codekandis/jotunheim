'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Cross-Origin-Embedder-Policy`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class CrossOriginEmbedderPolicyHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Cross-Origin-Embedder-Policy';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( CrossOriginEmbedderPolicyHttpResponseHeader.NAME, value );
	}
}
