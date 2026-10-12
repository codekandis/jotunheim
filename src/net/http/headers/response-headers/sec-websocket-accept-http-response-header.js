'use strict';

import { HttpResponseHeader } from '../http-response-header.js';

/**
 * Represents the HTTP response header `Sec-WebSocket-Accept`.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class SecWebsocketAcceptHttpResponseHeader extends HttpResponseHeader
{
	/**
	 * Represents the name of the HTTP response header.
	 * @type {string}
	 */
	static get NAME()
	{
		return 'Sec-WebSocket-Accept';
	}

	/**
	 * Constructor method.
	 * @param {string} value The value of the HTTP response header.
	 */
	constructor( value )
	{
		super( SecWebsocketAcceptHttpResponseHeader.NAME, value );
	}
}
