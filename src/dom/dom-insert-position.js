'use strict';

import { AbstractStatic } from '../types/abstract-static.js';

/**
 * Represents an enumeration of DOM insert positions.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class DomInsertPosition extends AbstractStatic
{
	/**
	 * Specifies that new elements must be inserted before an element.
	 * @type {string}
	 */
	static get BEFORE()
	{
		return 'BEFORE';
	}

	/**
	 * Specifies that new elements must be inserted after an element.
	 * @type {string}
	 */
	static get AFTER()
	{
		return 'AFTER';
	}
}
