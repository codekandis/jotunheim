'use strict';

import { AbstractStatic } from '../../Types/AbstractStatic.js';

/**
 * Represents an enumeration of content types.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ContentType extends AbstractStatic
{
	/**
	 * Represents the content type `application/json`.
	 * @type {String}
	 */
	static get APPLICATION_JSON()
	{
		return 'application/json';
	}

	/**
	 * Represents the content type `application/json; charset=utf-8`.
	 * @type {String}
	 */
	static get APPLICATION_JSON_UTF8()
	{
		return 'application/json; charset=utf-8';
	}

	/**
	 * Represents the content type `application/x-www-form-urlencoded`.
	 * @type {String}
	 */
	static get APPLICATION_X_WWW_FORM_URLENCODED()
	{
		return 'application/x-www-form-urlencoded';
	}

	/**
	 * Represents the content type `application/xml`.
	 * @type {String}
	 */
	static get APPLICATION_XML()
	{
		return 'application/xml';
	}

	/**
	 * Represents the content type `application/xml; charset=utf-8`.
	 * @type {String}
	 */
	static get APPLICATION_XML_UTF8()
	{
		return 'application/xml; charset=utf-8';
	}

	/**
	 * Represents the content type `text/html`.
	 * @type {String}
	 */
	static get TEXT_HTML()
	{
		return 'text/html';
	}

	/**
	 * Represents the content type `text/html; charset=utf-8`.
	 * @type {String}
	 */
	static get TEXT_HTML_UTF8()
	{
		return 'text/html; charset=utf-8';
	}

	/**
	 * Represents the content type `text/plain`.
	 * @type {String}
	 */
	static get TEXT_PLAIN()
	{
		return 'text/plain';
	}

	/**
	 * Represents the content type `text/plain; charset=utf-8`.
	 * @type {String}
	 */
	static get TEXT_PLAIN_UTF8()
	{
		return 'text/plain; charset=utf-8';
	}

	/**
	 * Represents the content type `application/xml`.
	 * @type {String}
	 */
	static get TEXT_XML()
	{
		return ContentType.APPLICATION_XML;
	}

	/**
	 * Represents the content type `application/xml; charset=utf-8`.
	 * @type {String}
	 */
	static get TEXT_XML_UTF8()
	{
		return ContentType.APPLICATION_XML_UTF8;
	}
}
