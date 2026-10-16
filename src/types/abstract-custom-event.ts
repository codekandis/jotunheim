'use strict';

import type { EventArguments } from './event-arguments.js';
import { EventDetails } from './event-details.js';

/**
 * Represents the base class of any custom event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export abstract class AbstractCustomEvent<TEventArguments extends EventArguments> extends CustomEvent<EventDetails<TEventArguments>>
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
	#_detail: EventDetails<TEventArguments>;

	/**
	 * Constructor method.
	 * @param eventName The name of the event.
	 * @param sender The object which dispatched the event.
	 * @param eventArguments The arguments of the event.
	 */
	constructor( eventName: string, sender: EventTarget, eventArguments: TEventArguments )
	{
		super( eventName );

		this.#_detail = new EventDetails( sender, eventArguments );
	}

	/**
	 * Gets the event details.
	 * @returns The event details.
	 */
	override get detail(): EventDetails<TEventArguments>
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
