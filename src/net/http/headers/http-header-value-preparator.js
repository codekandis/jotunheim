'use strict';

import { Abstract } from '../../../types/abstract.js';

/**
 * Represents an HTTP header value preparator.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HttpHeaderValuePreparator extends Abstract
{
	/**
	 * Prepares an HTTP header value.
	 * @param {string} httpHeaderValue The HTTP header value to prepare.
	 * @returns {string} The prepared HTTP header value.
	 */
	prepare( httpHeaderValue )
	{
		return httpHeaderValue.trimStart();
	}
}
