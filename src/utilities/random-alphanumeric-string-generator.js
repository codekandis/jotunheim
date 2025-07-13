'use strict';

import { RandomStringGenerator } from './random-string-generator.js';

/**
 * Represents a random alphanumeric string generator.
 */
export class RandomAlphanumericStringGenerator extends RandomStringGenerator
{
	/**
	 * Gets the valid characters of an alphanumeric string.
	 * @type {string}
	 */
	static get VALID_CHARACTERS()
	{
		return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	constructor()
	{
		super( RandomAlphanumericStringGenerator.VALID_CHARACTERS );
	}

	/**
	 * Generates a random alphanumeric string with a specific length.
	 * @param {Number} length The length of the alphanumeric string.
	 */
	generate( length )
	{
		return super.generate( length );
	}
}
