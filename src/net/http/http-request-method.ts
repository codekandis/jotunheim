'use strict';

/**
 * Represents an enumeration of HTTP request methods.
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum HttpRequestMethod
{
	/**
	 * Represents the HTTP request method `CONNECT`.
	 */
	CONNECT   = 'CONNECT',

	/**
	 * Represents the HTTP request method `COPY`.
	 */
	COPY      = 'COPY',

	/**
	 * Represents the HTTP request method `DELETE`.
	 */
	DELETE    = 'DELETE',

	/**
	 * Represents the HTTP request method `GET`.
	 */
	GET       = 'GET',

	/**
	 * Represents the HTTP request method `HEAD`.
	 */
	HEAD      = 'HEAD',

	/**
	 * Represents the HTTP request method `HTTP`.
	 */
	HTTP      = 'HTTP',

	/**
	 * Represents the HTTP request method `LOCK`.
	 */
	LOCK      = 'LOCK',

	/**
	 * Represents the HTTP request method `MKCOL`.
	 */
	MKCOL     = 'MKCOL',

	/**
	 * Represents the HTTP request method `MOVE`.
	 */
	MOVE      = 'MOVE',

	/**
	 * Represents the HTTP request method `OPTIONS`.
	 */
	OPTIONS   = 'OPTIONS',

	/**
	 * Represents the HTTP request method `PATCH`.
	 */
	PATCH     = 'PATCH',

	/**
	 * Represents the HTTP request method `POST`.
	 */
	POST      = 'POST',

	/**
	 * Represents the HTTP request method `PROPFIND`.
	 */
	PROPFIND  = 'PROPFIND',

	/**
	 * Represents the HTTP request method `PROPPATCH`.
	 */
	PROPPATCH = 'PROPPATCH',

	/**
	 * Represents the HTTP request method `PUT`.
	 */
	PUT       = 'PUT',

	/**
	 * Represents the HTTP request method `TRACE`.
	 */
	TRACE     = 'TRACE',

	/**
	 * Represents the HTTP request method `UNLOCK`.
	 */
	UNLOCK    = 'UNLOCK'
}
