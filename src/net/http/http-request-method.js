'use strict';

import { AbstractStatic } from '../../types/abstract-static.js';

/**
 * Represents an enumeration of HTTP request methods.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestMethod extends AbstractStatic
{
	/**
	 * Represents the HTTP request method `CONNECT`.
	 * @type {string}
	 */
	static get CONNECT()
	{
		return 'CONNECT';
	}

	/**
	 * Represents the HTTP request method `COPY`.
	 * @type {string}
	 */
	static get COPY()
	{
		return 'COPY';
	}

	/**
	 * Represents the HTTP request method `DELETE`.
	 * @type {string}
	 */
	static get DELETE()
	{
		return 'DELETE';
	}

	/**
	 * Represents the HTTP request method `GET`.
	 * @type {string}
	 */
	static get GET()
	{
		return 'GET';
	}

	/**
	 * Represents the HTTP request method `HEAD`.
	 * @type {string}
	 */
	static get HEAD()
	{
		return 'HEAD';
	}

	/**
	 * Represents the HTTP request method `HTTP`.
	 * @type {string}
	 */
	static get HTTP()
	{
		return 'HTTP';
	}

	/**
	 * Represents the HTTP request method `LOCK`.
	 * @type {string}
	 */
	static get LOCK()
	{
		return 'LOCK';
	}

	/**
	 * Represents the HTTP request method `MKCOL`.
	 * @type {string}
	 */
	static get MKCOL()
	{
		return 'MKCOL';
	}

	/**
	 * Represents the HTTP request method `MOVE`.
	 * @type {string}
	 */
	static get MOVE()
	{
		return 'MOVE';
	}

	/**
	 * Represents the HTTP request method `OPTIONS`.
	 * @type {string}
	 */
	static get OPTIONS()
	{
		return 'OPTIONS';
	}

	/**
	 * Represents the HTTP request method `PATCH`.
	 * @type {string}
	 */
	static get PATCH()
	{
		return 'PATCH';
	}

	/**
	 * Represents the HTTP request method `POST`.
	 * @type {string}
	 */
	static get POST()
	{
		return 'POST';
	}

	/**
	 * Represents the HTTP request method `PROPFIND`.
	 * @type {string}
	 */
	static get PROPFIND()
	{
		return 'PROPFIND';
	}

	/**
	 * Represents the HTTP request method `PROPPATCH`.
	 * @type {string}
	 */
	static get PROPPATCH()
	{
		return 'PROPPATCH';
	}

	/**
	 * Represents the HTTP request method `PUT`.
	 * @type {string}
	 */
	static get PUT()
	{
		return 'PUT';
	}

	/**
	 * Represents the HTTP request method `TRACE`.
	 * @type {string}
	 */
	static get TRACE()
	{
		return 'TRACE';
	}

	/**
	 * Represents the HTTP request method `UNLOCK`.
	 * @type {string}
	 */
	static get UNLOCK()
	{
		return 'UNLOCK';
	}
}
