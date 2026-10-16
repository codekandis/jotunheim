'use strict';

import type { Collection } from '../../collections/collection.js';
import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the HTML element validations succeeded event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsSucceededEventArguments extends EventArguments
{
	/**
	 * Stores the validated HTML elements.
	 */
	#_htmlElements: Collection;

	/**
	 * Constructor method.
	 * @param htmlElements The validated HTML elements.
	 */
	constructor( htmlElements: Collection )
	{
		super();

		this.#_htmlElements = htmlElements;
	}

	/**
	 * Gets the validated HTML elements.
	 * @returns The validated HTML elements.
	 */
	get htmlElements(): Collection
	{
		return this.#_htmlElements;
	}
}
