'use strict';

import { Abstract } from '../types/abstract.js';

/**
 * Represents a random string generator.
 */
export class RandomStringGenerator extends Abstract
{
	/**
	 * Stores the valid characters of a generated string.
	 */
	#_validCharacters;

	/**
	 * Constructor method.
	 * @param {String} validCharacters The valid characters of a generated string.
	 */
	constructor( validCharacters )
	{
		super();

		this.#_validCharacters = validCharacters;
	}

	/**
	 * Generates a random string with a specific length.
	 * @param {Number} length The length of the string.
	 */
	generate( length )
	{
		let generatedString = String.empty;
		for ( let n = 0; n < length; n++ )
		{
			const validCharacterIndex = Math.floor(
				Math.random() * this.#_validCharacters.length
			);
			generatedString += this.#_validCharacters[ validCharacterIndex ];
		}

		return generatedString;
	}
}
