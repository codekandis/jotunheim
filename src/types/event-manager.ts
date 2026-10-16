'use strict';

import { DomHelper } from '../dom/dom-helper.js';
import { Abstract } from './abstract.js';
import type { EventArguments } from './event-arguments.js';
import { EventHandlerMapping } from './event-handler-mapping.js';

/**
 * Represents an event manager managing event handlers for a specific event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventManager<
	TEventClass extends {
		new( sender: EventTarget, eventArguments: never ): Event & {
			readonly detail: {
				readonly eventArguments: EventArguments
			};
			dispatch(): void;
		};
		readonly EVENT_NAME: string;
	}
> extends Abstract
{
	/**
	 * Stores the class reference of the managed event.
	 */
	#_eventClass: TEventClass;

	/**
	 * Stores the object which will dispatch the event.
	 */
	#_sender: EventTarget;

	/**
	 * Constructor method.
	 * @param eventClass The class of the managed event.
	 * @param sender The object which will dispatch the event.
	 */
	constructor( eventClass: TEventClass, sender: EventTarget )
	{
		super();

		this.#_eventClass = eventClass;
		this.#_sender     = sender;
	}

	/**
	 * Adds a variadic amount of event handlers to the managed event.
	 * @param eventHandlers The event handlers to add.
	 */
	add( ...eventHandlers: ( ( event: InstanceType<TEventClass> ) => void )[] ): void
	{
		DomHelper.addEventHandlers(
			this.#_sender,
			new EventHandlerMapping( this.#_eventClass.EVENT_NAME, ...eventHandlers )
		);
	}

	/**
	 * Removes a variadic amount of event handlers from a managed event.
	 * @param eventHandlers The event handlers to remove.
	 */
	remove( ...eventHandlers: ( ( event: InstanceType<TEventClass> ) => void )[] ): void
	{
		DomHelper.removeEventHandlers(
			this.#_sender,
			new EventHandlerMapping( this.#_eventClass.EVENT_NAME, ...eventHandlers )
		);
	}

	/**
	 * Dispatches the managed event.
	 * @param eventArguments The arguments of the managed event.
	 */
	dispatch( eventArguments?: InstanceType<TEventClass>['detail']['eventArguments'] ): void
	{
		new this.#_eventClass( this.#_sender, eventArguments as never )
			.dispatch();
	}
}
