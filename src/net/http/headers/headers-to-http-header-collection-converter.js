'use strict';

import { Abstract } from '../../../types/abstract.js';
import { HttpHeaderCollection } from './http-header-collection.js';
import { HttpHeader } from './http-header.js';

/**
 * Represents a converter converting headers into a collection of HTTP headers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HeadersToHttpHeaderCollectionConverter extends Abstract
{
	/**
	 * Converts headers into a collection of HTTP headers.
	 * @param {Headers} headers The headers to convert.
	 * @returns {HttpHeaderCollection} The collection of HTTP headers.
	 */
	convert( headers )
	{
		return new HttpHeaderCollection(
			...headers.map(
				( fetchedHeaderName, fetchedHeaderValue, fetchedHeaderIndex ) =>
				{
					return new HttpHeader( fetchedHeaderName, fetchedHeaderValue );
				}
			)
		);
	}
}
