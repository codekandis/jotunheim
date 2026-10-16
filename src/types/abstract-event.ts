'use strict';

import { DefaultEventDetails } from './default-event-details.js';

/**
 * Represents the base class of any event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export abstract class AbstractEvent extends Event
{
	/**
	 * Gets the name of the event.
	 */
	static get EVENT_NAME(): string
	{
		return String.empty;
	}

	/**
	 * Stores the event details.
	 */
	#_detail: DefaultEventDetails;

	/**
	 * Constructor method.
	 * @param eventName The name of the event.
	 * @param sender The object which will dispatch the event.
	 */
	constructor( eventName: string, sender: EventTarget )
	{
		super( eventName );

		this.#_detail = new DefaultEventDetails( sender );
	}

	/**
	 * Gets the event details.
	 * @returns The event details.
	 */
	get detail(): DefaultEventDetails
	{
		return this.#_detail;
	}

	/**
	 * Dispatches the event.
	 */
	dispatch(): void
	{
		this.detail.sender.dispatchEvent( this );
	}

	/**
	 * Returns the type of the event.
	 * @returns The type of the event.
	 */
	override toString(): string
	{
		return this.type;
	}
}
