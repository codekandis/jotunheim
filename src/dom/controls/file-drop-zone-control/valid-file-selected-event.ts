'use strict';

import { AbstractCustomEvent } from '../../../types/abstract-custom-event.js';
import type { FileEventArguments } from './file-event-arguments.js';

/**
 * Defines the name of the event.
 */
const EVENT_NAME = 'validFileSelected' as const;

/**
 * Represents an event if a valid file has been dropped or selected.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class ValidFileSelectedEvent extends AbstractCustomEvent<FileEventArguments>
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
		super( ValidFileSelectedEvent.EVENT_NAME, sender, eventArguments );
	}
}
