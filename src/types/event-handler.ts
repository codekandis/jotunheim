'use strict';

/**
 * Represents types of the class `Event`.
 * @author Christian Ramelow <info@codekandis.net>
 */

/**
 * Represents an event handler.
 * @param event The event the handler is attached to.
 */
export type EventHandler = ( event: Event ) => void;
