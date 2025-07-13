'use strict';

import { Abstract } from '../../../types/abstract.js';
import { HttpResponseHeader } from './http-response-header.js';

/**
 * Represents a converter converting headers into a collection of HTTP response headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpResponseHeadersConverter extends Abstract
{
	/**
	 * Converts headers into an array of HTTP response headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpResponseHeader[]} The array of HTTP response headers.
	 */
	convert( headers )
	{
		return headers.map(
			( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
			{
				return new HttpResponseHeader( fetchedHeaderName, fetchedHeaderValue );
			}
		);
	}
}
