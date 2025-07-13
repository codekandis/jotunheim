'use strict';

import { Abstract } from '../../../types/abstract.js';
import { HttpRequestHeaderCollection } from './http-request-header-collection.js';
import { HttpRequestHeader } from './http-request-header.js';

/**
 * Represents a converter converting headers into a collection of HTTP request headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpRequestHeaderCollectionConverter extends Abstract
{
	/**
	 * Converts headers into a collection of HTTP request headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpRequestHeaderCollection} The collection of HTTP request headers.
	 */
	convert( headers )
	{
		return new HttpRequestHeaderCollection(
			...headers.map(
				( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
				{
					return new HttpRequestHeader( fetchedHeaderName, fetchedHeaderValue );
				}
			)
		);
	}
}
