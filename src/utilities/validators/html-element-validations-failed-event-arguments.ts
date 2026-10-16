'use strict';

import type { Collection } from '../../collections/collection.js';
import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the HTML element validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsFailedEventArguments extends EventArguments
{
	/**
	 * Stores the mappings of validated HTML elements and validation error messages.
	 */
	#_htmlElementErrorMessagesMappings: Collection;

	/**
	 * Constructor method.
	 * @param htmlElementErrorMessagesMappings The mappings of validated HTML elements and validation error messages.
	 */
	constructor( htmlElementErrorMessagesMappings: Collection )
	{
		super();

		this.#_htmlElementErrorMessagesMappings = htmlElementErrorMessagesMappings;
	}

	/**
	 * Gets the mappings of validated HTML elements and validation error messages.
	 * @returns The mappings of validated HTML elements and validation error messages.
	 */
	get htmlElementErrorMessagesMappings(): Collection
	{
		return this.#_htmlElementErrorMessagesMappings;
	}
}
