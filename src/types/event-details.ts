'use strict';

import { Abstract } from './abstract.js';
import type { EventArguments } from './event-arguments.js';

/**
 * Represents event details.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventDetails<TEventArguments extends EventArguments> extends Abstract
{
	/**
	 * Stores the object which dispatched the event.
	 */
	#_sender: EventTarget;

	/**
	 * Stores the arguments of the event.
	 */
	#_eventArguments: TEventArguments;

	/**
	 * Constructor method.
	 * @param sender The object which dispatched the event.
	 * @param eventArguments The arguments of the event.
	 */
	constructor( sender: EventTarget, eventArguments: TEventArguments )
	{
		super();

		this.#_sender         = sender;
		this.#_eventArguments = eventArguments;
	}

	/**
	 * Gets the object which dispatched the event.
	 * @returns The object which dispatched the event.
	 */
	get sender(): EventTarget
	{
		return this.#_sender;
	}

	/**
	 * Gets the arguments of the event.
	 * @returns The arguments of the event.
	 */
	get eventArguments(): TEventArguments
	{
		return this.#_eventArguments;
	}
}
