'use strict';

/**
 * Represents an enumeration of HTTP post data content types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export enum HttpPostDataContentType
{
	/**
	 * Specifies that the HTTP post data must be sent with `application/x-www-form-urlencoded`.
	 */
	APPLICATION_X_WWW_FORM_URL_ENCODED        = 'APPLICATION_X_WWW_FORM_URL_ENCODED',

	/**
	 * Specifies that the HTTP post data must be sent with `multipart/form-data`.
	 */
	MULTIPART_FORM_DATA                       = 'MULTIPART_FORM_DATA',

	/**
	 * Specifies that the HTTP post data must preferably be sent with `application/x-www-form-urlencoded`. If HTTP post files are present, `multipart/form-data` is used.
	 */
	PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED = 'PREFER_APPLICATION_X_WWW_FORM_URL_ENCODED'
}
