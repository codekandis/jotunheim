'use strict';

/**
 * Represents prototype extensions and types of the class `HTMLElement`.
 * @author Christian Ramelow <info@codekandis.net>
 */

import { EventManager } from '../types/event-manager.js';
import { BeforeInputEvent } from './before-input-event.js';
import { BlurEvent } from './blur-event.js';
import { ChangeEvent } from './change-event.js';
import { ClickEvent } from './click-event.js';
import { DoubleClickEvent } from './double-click-event.js';
import { DragEndEvent } from './drag-end-event.js';
import { DragEnterEvent } from './drag-enter-event.js';
import { DragEvent } from './drag-event.js';
import { DragLeaveEvent } from './drag-leave-event.js';
import { DragOverEvent } from './drag-over-event.js';
import { DragStartEvent } from './drag-start-event.js';
import { DropEvent } from './drop-event.js';
import { FocusEvent } from './focus-event.js';
import { FocusInEvent } from './focus-in-event.js';
import { FocusOutEvent } from './focus-out-event.js';
import { InputEvent } from './input-event.js';
import { KeyDownEvent } from './key-down-event.js';
import { KeyUpEvent } from './key-up-event.js';
import { MouseDownEvent } from './mouse-down-event.js';
import { MouseEnterEvent } from './mouse-enter-event.js';
import { MouseLeaveEvent } from './mouse-leave-event.js';
import { MouseMoveEvent } from './mouse-move-event.js';
import { MouseOutEvent } from './mouse-out-event.js';
import { MouseOverEvent } from './mouse-over-event.js';
import { MouseUpEvent } from './mouse-up-event.js';
import { WheelEvent } from './wheel-event.js';

declare global
{
	/**
	 * Represents extensions of the HTML element.
	 */
	interface HTMLElement
	{
		/**
		 * Stores arbitrary data related to the HTML element.
		 */
		data: unknown;

		/**
		 * Removes all child nodes from the HTML element.
		 */
		empty(): void;

		/**
		 * Hides an HTML element.
		 */
		hide(): void;

		/**
		 * Shows an HTML element.
		 */
		show(): void;

		/**
		 * Gets the before input event.
		 * @returns The before input event manager.
		 */
		readonly beforeInputEvent: EventManager<typeof BeforeInputEvent>;

		/**
		 * Gets the input event.
		 * @returns The input event manager.
		 */
		readonly inputEvent: EventManager<typeof InputEvent>;

		/**
		 * Gets the change event.
		 * @returns The change event manager.
		 */
		readonly changeEvent: EventManager<typeof ChangeEvent>;

		/**
		 * Gets the drag end event.
		 * @returns The drag end event manager.
		 */
		readonly dragEndEvent: EventManager<typeof DragEndEvent>;

		/**
		 * Gets the drag enter event.
		 * @returns The drag enter event manager.
		 */
		readonly dragEnterEvent: EventManager<typeof DragEnterEvent>;

		/**
		 * Gets the drag event.
		 * @returns The drag event manager.
		 */
		readonly dragEvent: EventManager<typeof DragEvent>;

		/**
		 * Gets the drag leave event.
		 * @returns The drag leave event manager.
		 */
		readonly dragLeaveEvent: EventManager<typeof DragLeaveEvent>;

		/**
		 * Gets the drag over event.
		 * @returns The drag over event manager.
		 */
		readonly dragOverEvent: EventManager<typeof DragOverEvent>;

		/**
		 * Gets the drag start event.
		 * @returns The drag start event manager.
		 */
		readonly dragStartEvent: EventManager<typeof DragStartEvent>;

		/**
		 * Gets the drop event.
		 * @returns The drop event manager.
		 */
		readonly dropEvent: EventManager<typeof DropEvent>;

		/**
		 * Gets the blur event.
		 * @returns The blur event manager.
		 */
		readonly blurEvent: EventManager<typeof BlurEvent>;

		/**
		 * Gets the focus event.
		 * @returns The focus event manager.
		 */
		readonly focusEvent: EventManager<typeof FocusEvent>;

		/**
		 * Gets the focus in event.
		 * @returns The focus in event manager.
		 */
		readonly focusInEvent: EventManager<typeof FocusInEvent>;

		/**
		 * Gets the focus out event.
		 * @returns The focus out event manager.
		 */
		readonly focusOutEvent: EventManager<typeof FocusOutEvent>;

		/**
		 * Gets the key down event.
		 * @returns The key down event manager.
		 */
		readonly keyDownEvent: EventManager<typeof KeyDownEvent>;

		/**
		 * Gets the key up event.
		 * @returns The key up event manager.
		 */
		readonly keyUpEvent: EventManager<typeof KeyUpEvent>;

		/**
		 * Gets the click event.
		 * @returns The click event manager.
		 */
		readonly clickEvent: EventManager<typeof ClickEvent>;

		/**
		 * Gets the double click event.
		 * @returns The double click event manager.
		 */
		readonly doubleClickEvent: EventManager<typeof DoubleClickEvent>;

		/**
		 * Gets the mouse down event.
		 * @returns The mouse down event manager.
		 */
		readonly mouseDownEvent: EventManager<typeof MouseDownEvent>;

		/**
		 * Gets the mouse up event.
		 * @returns The mouse up event manager.
		 */
		readonly mouseUpEvent: EventManager<typeof MouseUpEvent>;

		/**
		 * Gets the mouse enter event.
		 * @returns The mouse enter event manager.
		 */
		readonly mouseEnterEvent: EventManager<typeof MouseEnterEvent>;

		/**
		 * Gets the mouse move event.
		 * @returns The mouse move event manager.
		 */
		readonly mouseMoveEvent: EventManager<typeof MouseMoveEvent>;

		/**
		 * Gets the mouse leave event.
		 * @returns The mouse leave event manager.
		 */
		readonly mouseLeaveEvent: EventManager<typeof MouseLeaveEvent>;

		/**
		 * Gets the mouse over event.
		 * @returns The mouse over event manager.
		 */
		readonly mouseOverEvent: EventManager<typeof MouseOverEvent>;

		/**
		 * Gets the mouse out event.
		 * @returns The mouse out event manager.
		 */
		readonly mouseOutEvent: EventManager<typeof MouseOutEvent>;

		/**
		 * Gets the wheel event.
		 * @returns The wheel event manager.
		 */
		readonly wheelEvent: EventManager<typeof WheelEvent>;
	}
}

Object.defineProperty(
	HTMLElement.prototype,
	'data',
	{
		value:    null,
		writable: true
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'empty',
	{
		/**
		 * Removes all child nodes from the HTML element.
		 */
		value: function ( this: HTMLElement ): void
		       {
			       this.replaceChildren();
		       }
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'hide',
	{
		/**
		 * Hides an HTML element.
		 */
		value: function ( this: HTMLElement ): void
		       {
			       this.style.display = 'none';
		       }
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'show',
	{
		/**
		 * Shows an HTML element.
		 */
		value: function ( this: HTMLElement ): void
		       {
			       this.style.display = '';
		       }
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'beforeInputEvent',
	{
		/**
		 * Gets the before input event.
		 * @returns The before input event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof BeforeInputEvent>
		{
			return new EventManager<typeof BeforeInputEvent>( BeforeInputEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'inputEvent',
	{
		/**
		 * Gets the input event.
		 * @returns The input event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof InputEvent>
		{
			return new EventManager<typeof InputEvent>( InputEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'changeEvent',
	{
		/**
		 * Gets the change event.
		 * @returns The change event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof ChangeEvent>
		{
			return new EventManager<typeof ChangeEvent>( ChangeEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'dragEndEvent',
	{
		/**
		 * Gets the drag end event.
		 * @returns The drag end event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DragEndEvent>
		{
			return new EventManager<typeof DragEndEvent>( DragEndEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'dragEnterEvent',
	{
		/**
		 * Gets the drag enter event.
		 * @returns The drag enter event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DragEnterEvent>
		{
			return new EventManager<typeof DragEnterEvent>( DragEnterEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'dragEvent',
	{
		/**
		 * Gets the drag event.
		 * @returns The drag event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DragEvent>
		{
			return new EventManager<typeof DragEvent>( DragEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'dragLeaveEvent',
	{
		/**
		 * Gets the drag leave event.
		 * @returns The drag leave event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DragLeaveEvent>
		{
			return new EventManager<typeof DragLeaveEvent>( DragLeaveEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'dragOverEvent',
	{
		/**
		 * Gets the drag over event.
		 * @returns The drag over event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DragOverEvent>
		{
			return new EventManager<typeof DragOverEvent>( DragOverEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'dragStartEvent',
	{
		/**
		 * Gets the drag start event.
		 * @returns The drag start event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DragStartEvent>
		{
			return new EventManager<typeof DragStartEvent>( DragStartEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'dropEvent',
	{
		/**
		 * Gets the drop event.
		 * @returns The drop event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DropEvent>
		{
			return new EventManager<typeof DropEvent>( DropEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'blurEvent',
	{
		/**
		 * Gets the blur event.
		 * @returns The blur event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof BlurEvent>
		{
			return new EventManager<typeof BlurEvent>( BlurEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'focusEvent',
	{
		/**
		 * Gets the focus event.
		 * @returns The focus event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof FocusEvent>
		{
			return new EventManager<typeof FocusEvent>( FocusEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'focusInEvent',
	{
		/**
		 * Gets the focus in event.
		 * @returns The focus in event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof FocusInEvent>
		{
			return new EventManager<typeof FocusInEvent>( FocusInEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'focusOutEvent',
	{
		/**
		 * Gets the focus out event.
		 * @returns The focus out event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof FocusOutEvent>
		{
			return new EventManager<typeof FocusOutEvent>( FocusOutEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'keyDownEvent',
	{
		/**
		 * Gets the key down event.
		 * @returns The key down event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof KeyDownEvent>
		{
			return new EventManager<typeof KeyDownEvent>( KeyDownEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'keyUpEvent',
	{
		/**
		 * Gets the key up event.
		 * @returns The key up event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof KeyUpEvent>
		{
			return new EventManager<typeof KeyUpEvent>( KeyUpEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'clickEvent',
	{
		/**
		 * Gets the click event.
		 * @returns The click event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof ClickEvent>
		{
			return new EventManager<typeof ClickEvent>( ClickEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'doubleClickEvent',
	{
		/**
		 * Gets the double click event.
		 * @returns The double click event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof DoubleClickEvent>
		{
			return new EventManager<typeof DoubleClickEvent>( DoubleClickEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'mouseDownEvent',
	{
		/**
		 * Gets the mouse down event.
		 * @returns The mouse down event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof MouseDownEvent>
		{
			return new EventManager<typeof MouseDownEvent>( MouseDownEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'mouseUpEvent',
	{
		/**
		 * Gets the mouse up event.
		 * @returns The mouse up event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof MouseUpEvent>
		{
			return new EventManager<typeof MouseUpEvent>( MouseUpEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'mouseEnterEvent',
	{
		/**
		 * Gets the mouse enter event.
		 * @returns The mouse enter event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof MouseEnterEvent>
		{
			return new EventManager<typeof MouseEnterEvent>( MouseEnterEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'mouseMoveEvent',
	{
		/**
		 * Gets the mouse move event.
		 * @returns The mouse move event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof MouseMoveEvent>
		{
			return new EventManager<typeof MouseMoveEvent>( MouseMoveEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'mouseLeaveEvent',
	{
		/**
		 * Gets the mouse leave event.
		 * @returns The mouse leave event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof MouseLeaveEvent>
		{
			return new EventManager<typeof MouseLeaveEvent>( MouseLeaveEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'mouseOverEvent',
	{
		/**
		 * Gets the mouse over event.
		 * @returns The mouse over event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof MouseOverEvent>
		{
			return new EventManager<typeof MouseOverEvent>( MouseOverEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'mouseOutEvent',
	{
		/**
		 * Gets the mouse out event.
		 * @returns The mouse out event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof MouseOutEvent>
		{
			return new EventManager<typeof MouseOutEvent>( MouseOutEvent, this );
		}
	}
);

Object.defineProperty(
	HTMLElement.prototype,
	'wheelEvent',
	{
		/**
		 * Gets the wheel event.
		 * @returns The wheel event manager.
		 */
		get( this: HTMLElement ): EventManager<typeof WheelEvent>
		{
			return new EventManager<typeof WheelEvent>( WheelEvent, this );
		}
	}
);
