'use strict';

import { AbstractStatic } from '../../Types/AbstractStatic.js';

/**
 * Represents an enumeration of HTTP request methods.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpRequestMethod extends AbstractStatic
{
	/**
	 * Represents the HTTP request method `CONNECT`.
	 * @type {String}
	 */
	static get CONNECT()
	{
		return 'CONNECT';
	}

	/**
	 * Represents the HTTP request method `COPY`.
	 * @type {String}
	 */
	static get COPY()
	{
		return 'COPY';
	}

	/**
	 * Represents the HTTP request method `DELETE`.
	 * @type {String}
	 */
	static get DELETE()
	{
		return 'DELETE';
	}

	/**
	 * Represents the HTTP request method `GET`.
	 * @type {String}
	 */
	static get GET()
	{
		return 'GET';
	}

	/**
	 * Represents the HTTP request method `HEAD`.
	 * @type {String}
	 */
	static get HEAD()
	{
		return 'HEAD';
	}

	/**
	 * Represents the HTTP request method `HTTP`.
	 * @type {String}
	 */
	static get HTTP()
	{
		return 'HTTP';
	}

	/**
	 * Represents the HTTP request method `LOCK`.
	 * @type {String}
	 */
	static get LOCK()
	{
		return 'LOCK';
	}

	/**
	 * Represents the HTTP request method `MKCOL`.
	 * @type {String}
	 */
	static get MKCOL()
	{
		return 'MKCOL';
	}

	/**
	 * Represents the HTTP request method `MOVE`.
	 * @type {String}
	 */
	static get MOVE()
	{
		return 'MOVE';
	}

	/**
	 * Represents the HTTP request method `OPTIONS`.
	 * @type {String}
	 */
	static get OPTIONS()
	{
		return 'OPTIONS';
	}

	/**
	 * Represents the HTTP request method `PATCH`.
	 * @type {String}
	 */
	static get PATCH()
	{
		return 'PATCH';
	}

	/**
	 * Represents the HTTP request method `POST`.
	 * @type {String}
	 */
	static get POST()
	{
		return 'POST';
	}

	/**
	 * Represents the HTTP request method `PROPFIND`.
	 * @type {String}
	 */
	static get PROPFIND()
	{
		return 'PROPFIND';
	}

	/**
	 * Represents the HTTP request method `PROPPATCH`.
	 * @type {String}
	 */
	static get PROPPATCH()
	{
		return 'PROPPATCH';
	}

	/**
	 * Represents the HTTP request method `PUT`.
	 * @type {String}
	 */
	static get PUT()
	{
		return 'PUT';
	}

	/**
	 * Represents the HTTP request method `TRACE`.
	 * @type {String}
	 */
	static get TRACE()
	{
		return 'TRACE';
	}

	/**
	 * Represents the HTTP request method `UNLOCK`.
	 * @type {String}
	 */
	static get UNLOCK()
	{
		return 'UNLOCK';
	}
}
