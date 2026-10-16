'use strict';

import { Collection } from '../collections/collection.js';
import { Abstract } from './abstract.js';

/**
 * Represents a mapping between an event name and its event handlers.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventHandlerMapping<TEvent extends Event> extends Abstract
{
	/**
	 * Stores the event name.
	 */
	#_eventName: string;

	/**
	 * Stores the event handlers.
	 */
	#_eventHandlers: Collection;

	/**
	 * Constructor method.
	 * @param eventName The event name.
	 * @param eventHandlers The event handlers.
	 */
	constructor( eventName: string, ...eventHandlers: ( ( event: TEvent ) => void )[] )
	{
		super();

		this.#_eventName     = eventName;
		this.#_eventHandlers = new Collection( ...eventHandlers );
	}

	/**
	 * Gets the event name.
	 * @returns The event name.
	 */
	get eventName(): string
	{
		return this.#_eventName;
	}

	/**
	 * Gets the event handlers.
	 * @returns The event handlers.
	 */
	get eventHandlers(): Collection
	{
		return this.#_eventHandlers;
	}
}
