'use strict';

/**
 * Represents prototype extensions and JSDoc types of the class `HTMLElement`.
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

/**
 * Stores arbitrary data related to the HTML element.
 * @property {any} data
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'data',
	{
		value:    null,
		writable: true
	}
);

/**
 * Removes all child nodes from the HTML element.
 * @method empty
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'empty',
	{
		value: function ()
		       {
			       this.replaceChildren();
		       }
	}
);

/**
 * Hides an HTML element.
 * @method hide
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'hide',
	{
		value: function ()
		       {
			       this.styles.display = 'none';
		       }
	}
);

/**
 * Shows an HTML element.
 * @method show
 * @memberOf HTMLElement.prototype
 */
Object.defineProperty(
	HTMLElement.prototype,
	'show',
	{
		value: function ()
		       {
			       this.styles.display = '';
		       }
	}
);

/**
 * Gets the before input event.
 * @property {EventManager_Event} beforeInputEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'beforeInputEvent',
	{
		get()
		{
			return new EventManager( BeforeInputEvent, this );
		}
	}
);

/**
 * Gets the input event.
 * @property {EventManager_Event} inputEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'inputEvent',
	{
		get()
		{
			return new EventManager( InputEvent, this );
		}
	}
);

/**
 * Gets the change event.
 * @property {EventManager_Event} changeEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'changeEvent',
	{
		get()
		{
			return new EventManager( ChangeEvent, this );
		}
	}
);

/**
 * Gets the drag end event.
 * @property {EventManager_Event} dragEndEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragEndEvent',
	{
		get()
		{
			return new EventManager( DragEndEvent, this );
		}
	}
);

/**
 * Gets the drag enter event.
 * @property {EventManager_Event} dragEnterEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragEnterEvent',
	{
		get()
		{
			return new EventManager( DragEnterEvent, this );
		}
	}
);

/**
 * Gets the drag event.
 * @property {EventManager_Event} dragEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragEvent',
	{
		get()
		{
			return new EventManager( DragEvent, this );
		}
	}
);

/**
 * Gets the drag leave event.
 * @property {EventManager_Event} dragLeaveEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragLeaveEvent',
	{
		get()
		{
			return new EventManager( DragLeaveEvent, this );
		}
	}
);

/**
 * Gets the drag over event.
 * @property {EventManager_Event} dragOverEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragOverEvent',
	{
		get()
		{
			return new EventManager( DragOverEvent, this );
		}
	}
);

/**
 * Gets the drag start event.
 * @property {EventManager_Event} dragStartEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dragStartEvent',
	{
		get()
		{
			return new EventManager( DragStartEvent, this );
		}
	}
);

/**
 * Gets the drop event.
 * @property {EventManager_Event} dropEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'dropEvent',
	{
		get()
		{
			return new EventManager( DropEvent, this );
		}
	}
);

/**
 * Gets the blur event.
 * @property {EventManager_Event} blurEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'blurEvent',
	{
		get()
		{
			return new EventManager( BlurEvent, this );
		}
	}
);

/**
 * Gets the focus event.
 * @property {EventManager_Event} focusEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'focusEvent',
	{
		get()
		{
			return new EventManager( FocusEvent, this );
		}
	}
);

/**
 * Gets the focus in event.
 * @property {EventManager_Event} focusInEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'focusInEvent',
	{
		get()
		{
			return new EventManager( FocusInEvent, this );
		}
	}
);

/**
 * Gets the focus out event.
 * @property {EventManager_Event} focusOutEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'focusOutEvent',
	{
		get()
		{
			return new EventManager( FocusOutEvent, this );
		}
	}
);

/**
 * Gets the key down event.
 * @property {EventManager_Event} keyDownEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'keyDownEvent',
	{
		get()
		{
			return new EventManager( KeyDownEvent, this );
		}
	}
);

/**
 * Gets the key up event.
 * @property {EventManager_Event} keyUpEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'keyUpEvent',
	{
		get()
		{
			return new EventManager( KeyUpEvent, this );
		}
	}
);

/**
 * Gets the click event.
 * @property {EventManager_Event} clickEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'clickEvent',
	{
		get()
		{
			return new EventManager( ClickEvent, this );
		}
	}
);

/**
 * Gets the double click event.
 * @property {EventManager_Event} doubleClickEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'doubleClickEvent',
	{
		get()
		{
			return new EventManager( DoubleClickEvent, this );
		}
	}
);

/**
 * Gets the mouse down event.
 * @property {EventManager_Event} mouseDownEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseDownEvent',
	{
		get()
		{
			return new EventManager( MouseDownEvent, this );
		}
	}
);

/**
 * Gets the mouse up event.
 * @property {EventManager_Event} mouseUpEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseUpEvent',
	{
		get()
		{
			return new EventManager( MouseUpEvent, this );
		}
	}
);

/**
 * Gets the mouse enter event.
 * @property {EventManager_Event} mouseEnterEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseEnterEvent',
	{
		get()
		{
			return new EventManager( MouseEnterEvent, this );
		}
	}
);

/**
 * Gets the mouse move event.
 * @property {EventManager_Event} mouseMoveEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseMoveEvent',
	{
		get()
		{
			return new EventManager( MouseMoveEvent, this );
		}
	}
);

/**
 * Gets the mouse leave event.
 * @property {EventManager_Event} mouseLeaveEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseLeaveEvent',
	{
		get()
		{
			return new EventManager( MouseLeaveEvent, this );
		}
	}
);

/**
 * Gets the mouse over event.
 * @property {EventManager_Event} mouseOverEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseOverEvent',
	{
		get()
		{
			return new EventManager( MouseOverEvent, this );
		}
	}
);

/**
 * Gets the mouse out event.
 * @property {EventManager_Event} mouseOutEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'mouseOutEvent',
	{
		get()
		{
			return new EventManager( MouseOutEvent, this );
		}
	}
);

/**
 * Gets the wheel event.
 * @property {EventManager_Event} wheelEvent
 * @memberOf HTMLElement.prototype
 * @type {EventManager_Event}
 */
Object.defineProperty(
	HTMLElement.prototype,
	'wheelEvent',
	{
		get()
		{
			return new EventManager( WheelEvent, this );
		}
	}
);
