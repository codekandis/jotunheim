'use strict';

import { EventArguments } from '../../types/event-arguments.js';

/**
 * Represents the arguments of the HTML element validations failed event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class HtmlElementValidationsFailedEventArguments extends EventArguments
{
	/**
	 * Stores the mappings of validated HTML elements and validation error messages.
	 * @type {Collection<HtmlElementErrorMessagesMapping>}
	 */
	#_htmlElementErrorMessagesMappings;

	/**
	 * Constructor method.
	 * @param {Collection<HtmlElementErrorMessagesMapping>} htmlElementErrorMessagesMappings The mappings of validated HTML elements and validation error messages.
	 */
	constructor( htmlElementErrorMessagesMappings )
	{
		super();

		this.#_htmlElementErrorMessagesMappings = htmlElementErrorMessagesMappings;
	}

	/**
	 * Gets the mappings of validated HTML elements and validation error messages.
	 * @returns {Collection<HtmlElementErrorMessagesMapping>} The mappings of validated HTML elements and validation error messages.
	 */
	get htmlElementErrorMessagesMappings()
	{
		return this.#_htmlElementErrorMessagesMappings;
	}
}
