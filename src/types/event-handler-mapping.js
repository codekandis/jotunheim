'use strict';

import { Collection } from '../collections/collection.js';
import { Abstract } from './abstract.js';

/**
 * Represents a mapping of an event name and event handlers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventHandlerMapping extends Abstract
{
	/**
	 * Stores the event name.
	 * @type {string}
	 */
	#_eventName;

	/**
	 * Stores the event handlers.
	 * @type {Collection<Event_EventHandler>}
	 */
	#_eventHandlers;

	/**
	 * Constructor method.
	 * @param {string} eventName The event name.
	 * @param {...Event_EventHandler} eventHandlers The event handlers.
	 */
	constructor( eventName, ...eventHandlers )
	{
		super();

		this.#_eventName     = eventName;
		this.#_eventHandlers = new Collection( ...eventHandlers );
	}

	/**
	 * Gets the event name.
	 * @returns {string} The event name.
	 */
	get eventName()
	{
		return this.#_eventName;
	}

	/**
	 * Gets the event handlers.
	 * @returns {Collection<Event_EventHandler>} The event handlers.
	 */
	get eventHandlers()
	{
		return this.#_eventHandlers;
	}
}
