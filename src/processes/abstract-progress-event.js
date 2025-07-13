'use strict';

import { DefaultEventDetails } from '../types/default-event-details.js';

/**
 * Represents the base class of any progress event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class AbstractProgressEvent extends MouseEvent
{
	/**
	 * Gets the name of the event.
	 * @type {String}
	 */
	static get EVENT_NAME()
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 * @type {DefaultEventDetails}
	 */
	#_detail;

	/**
	 * Constructor method.
	 * @param {String} eventName The name of the event.
	 * @param {Object} sender The object which dispatched the event.
	 */
	constructor( eventName, sender )
	{
		super( eventName );

		this.#_detail = new DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns {DefaultEventDetails} The event details.
	 */
	get detail()
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch()
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the name of the event.
	 * @returns {String} The name of the event.
	 */
	toString()
	{
		return this.type;
	}
}
