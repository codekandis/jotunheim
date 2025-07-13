'use strict';

import './dom/document.js';
import './dom/html-element.js';
import './dom/keyboard-event.js';
import './dom/mouse-event.js';
import './dom/node-list.js';
import './io/file.js';
import './io/file-list.js';
import './io/file-reader.js';
import './net/http/headers/headers.js';
import './net/url.js';
import './types/array.js';
import './types/date.js';
import './types/event.js';
import './types/generator.js';
import './types/object.js';
import './types/string.js';
import { Abstract } from './types/abstract.js';

/**
 * Represents the bootstrap class of the library.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class Jotunheim extends Abstract
{
	/**
	 * Loads the library.
	 */
	load()
	{
	}
}
