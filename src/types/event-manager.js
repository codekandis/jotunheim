'use strict';

import { DomHelper } from '../dom/dom-helper.js';
import { Abstract } from './abstract.js';
import { EventHandlerMapping } from './event-handler-mapping.js';

/**
 * Represents a function registering or removing event handlers.
 * @typedef {
 *     (...eventHandlers: Event_EventHandler[]) => void
 * } EventManager_EventHandlerAction
 */

/**
 * Represents a callable event manager with event management operations.
 * @typedef {
 *     EventManager_EventHandlerAction
 *     & {
 *         dispatch: (eventArguments?: ?EventArguments) => void,
 *         remove: EventManager_EventHandlerAction
 *     }
 * } EventManager_Event
 */

/**
 * Represents the class of a managed event.
 * @typedef {
 *      Function & { EVENT_NAME: string }
 * } EventManager_EventClass
 */

/**
 * Represents an event manager managing event handlers for a specific event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class EventManager extends Abstract
{
	/**
	 * Stores the class reference of the managed event.
	 * @type {EventManager_EventClass} The class reference of the managed event.
	 */
	#_eventClass;

	/**
	 * Stores the object which will dispatch the event.
	 * @type {object}
	 */
	#_sender;

	/**
	 * Constructor method.
	 * @param {EventManager_EventClass} eventClass The class of the managed event.
	 * @param {object} sender The object which will dispatch the event.
	 * @returns {EventManager_Event} The event managing function.
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
	 * @param {...Event_EventHandler} eventHandlers The event handlers to add.
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
	 * @param {...Event_EventHandler} eventHandlers The event handlers to remove.
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
	 * @param {?EventArguments} [eventArguments] The arguments of the managed event.
	 */
	#dispatch = ( eventArguments ) =>
	{
		new this.#_eventClass( this.#_sender, eventArguments )
			.dispatch();
	}
}
