'use strict';

import { AbstractCustomEvent } from '../../../types/abstract-custom-event.js';
import type { FileEventArguments } from './file-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'invalidFileSelected' as const;

/**
 * Represents an event if an invalid file has been dropped or selected.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class InvalidFileSelectedEvent extends AbstractCustomEvent<FileEventArguments>
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
	 * @param sender The object dispatching this event.
	 * @param eventArguments The arguments of the event.
	 */
	constructor( sender: EventTarget, eventArguments: FileEventArguments )
	{
		super( InvalidFileSelectedEvent.EVENT_NAME, sender, eventArguments );
	}
}
