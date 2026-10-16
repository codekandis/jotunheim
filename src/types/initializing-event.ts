'use strict';

import { AbstractCustomEvent } from './abstract-custom-event.js';
import type { InitializingEventArguments } from './initializing-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'initializing' as const;

/**
 * Represents an initializing event.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InitializingEvent extends AbstractCustomEvent<InitializingEventArguments>
{
	/**
	 * @inheritdoc
	 */
	static override get EVENT_NAME(): typeof EVENT_NAME
	{
		return EVENT_NAME;
	}

	/**
	 * Constructor method.
	 * @param sender The object which dispatched the event.
	 * @param eventArguments The arguments of the event.
	 */
	constructor( sender: EventTarget, eventArguments: InitializingEventArguments )
	{
		super( InitializingEvent.EVENT_NAME, sender, eventArguments );
	}
}
