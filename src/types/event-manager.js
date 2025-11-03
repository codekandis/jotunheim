'use strict';

import { DomHelper } from '../dom/dom-helper.js';
import { Abstract } from './abstract.js';
import { EventHandlerMapping } from './event-handler-mapping.js';

/**
 * Represents an event manager managing event handlers for a specific event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventManager extends Abstract
{
	/**
	 * Stores the class reference of the managed event.
	 * @type {Function} The class reference of the managed event.
	 */
	#_eventClass;

	/**
	 * Stores the object which will dispatch the event.
	 * @type {object}
	 */
	#_sender;

	/**
	 * Constructor method.
	 * @param {Function} eventClass The class of the managed event.
	 * @param {object} sender The object which will dispatch the event.
	 * @returns {Function} The event managing function.
	 */
	constructor( eventClass, sender )
	{
		super();

		this.#_eventClass = eventClass;
		this.#_sender     = sender;

		this.#initialize();

		return this.#addEventHandlers;
	}

	/**
	 * Initializes the event manager.
	 */
	#initialize()
	{
		this.#addEventHandlers.dispatch = this.#dispatch;
		this.#addEventHandlers.remove   = this.#remove;
	}

	/**
	 * Adds a variadic amount of event handlers to the managed event.
	 * @param {...Function<Event>} eventHandlers The event handlers to add.
	 */
	#addEventHandlers = ( ...eventHandlers ) =>
	{
		DomHelper.addEventHandlers(
			this.#_sender,
			new EventHandlerMapping( this.#_eventClass.EVENT_NAME, ...eventHandlers )
		);
	}

	/**
	 * Removes a variadic amount of event handlers from a managed event.
	 * @param {...Function<Event>} eventHandlers The event handlers to remove.
	 */
	#remove = ( ...eventHandlers ) =>
	{
		DomHelper.removeEventHandlers(
			this.#_sender,
			new EventHandlerMapping( this.#_eventClass.EVENT_NAME, ...eventHandlers )
		);
	}

	/**
	 * Dispatches the managed event.
	 * @param {?EventArguments} eventArguments The arguments of the managed event.
	 */
	#dispatch = ( eventArguments ) =>
	{
		( new this.#_eventClass( this.#_sender, eventArguments ) )
			.dispatch();
	}
}
