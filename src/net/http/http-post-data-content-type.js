'use strict';

import { AbstractStatic } from '../../types/abstract-static.js';

/**
 * Represents an enumeration of HTTP post data content types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpPostDataContentType extends AbstractStatic
{
	/**
	 * Specifies that the HTTP post data must be sent with `application/x-www-form-urlencoded`.
	 * @type {String}
	 */
	static get APPLICATION_X_WWW_FORM_URL_ENCODED()
	{
		return 'APPLICATION_X_WWW_FORM_URL_ENCODED';
	}

	/**
	 * Specifies that the HTTP post data must be sent with `multipart/form-data`.
	 * @type {String}
	 */
	static get MULTIPART_FORM_DATA()
	{
		return 'MULTIPART_FORM_DATA';
	}

	/**
	 * Specifies that the HTTP post data must preferably be sent with `application/x-www-form-urlencoded`. If HTTP post files are present `multipart/form-data` will be used.
	 * @type {String}
	 */
	static get PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED()
	{
		return 'PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED';
	}
}
