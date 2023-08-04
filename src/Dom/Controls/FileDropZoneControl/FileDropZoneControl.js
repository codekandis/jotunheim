'use strict';

import { Collection } from '../../../Collections/Collection.js';
import { Abstract } from '../../../Types/Abstract.js';
import { BooleanString } from '../../../Types/BooleanString.js';
import { EventManager } from '../../../Types/EventManager.js';
import { DomHelper } from '../../DomHelper.js';
import { FileEventArguments } from './FileEventArguments.js';
import { InvalidFileSelectedEvent } from './InvalidFileSelectedEvent.js';
import { MultipleFileRejectedEvent } from './MultipleFileRejectedEvent.js';
import { ValidFileSelectedEvent } from './ValidFileSelectedEvent.js';

/**
 * Represents a file drop zone control to drop or select files.
 * @author Christian Ramelow <info@codekandis.net>
 */
export class FileDropZoneControl extends Abstract
{
	/**
	 * Represents the control type.
	 * @type {String}
	 */
	static get CONTROL_TYPE()
	{
		return 'FILE_DROP_ZONE_CONTROL';
	}

	/**
	 * Represents the control template.
	 * @type {String_ReplacementHandler}
	 */
	static get #CONTROL_TEMPLATE()
	{
		return String.format`
            <div data-control-type="FILE_DROP_ZONE"/>
        `;
	}

	/**
	 * Represents the control template of the file selection dialog.
	 * @type {String_ReplacementHandler}
	 */
	static get #FILE_SELECTION_DIALOG_CONTROL_TEMPLATE()
	{
		return String.format`
			<input data-control-type="FILE_DROP_ZONE_SELECTION_DIALOG" type="file" style="${ 0 }"/>
		`;
	}

	/**
	 * Represents the styles of the control.
	 * @returns {String[]}
	 */
	static get #FILE_SELECTION_DIALOG_CONTROL_STYLES()
	{
		return [
			'display: none !important;'
		];
	}

	/**
	 * Stores the drop zone.
	 * @type {HTMLElement}
	 */
	#_fileDropZone;

	/**
	 * Stores the multiple files dropped on or selected with the file drop zone while multiple files are disallowed.
	 * @type {Collection<File>}
	 */
	#_rejectedMultipleFiles = new Collection();

	/**
	 * Stores the invalid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	#_invalidSelectedFiles = new Collection();

	/**
	 * Stores the valid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	#_validSelectedFiles = new Collection();

	/**
	 * Stores the accepted file and types. If empty any file is accepted.
	 * @type {Array<String>}
	 */
	#_acceptedFileTypes;

	/**
	 * Stores true if multiple files can be dropped or selected, otherwise false.
	 * @type {Boolean}
	 */
	#_isMultipleFile;

	/**
	 * Stores the file selection dialog.
	 * @type {HTMLInputElement}
	 */
	#_fileSelectionDialog = null;

	/**
	 * Constructor method.
	 * @param {HTMLElement} fileDropZone The drop zone of the control.
	 */
	constructor( fileDropZone )
	{
		super();

		this.#_fileDropZone = fileDropZone;
	}

	/**
	 * Gets the multiple files dropped on or selected with the file drop zone while multiple files are disallowed.
	 * @type {Collection<File>}
	 */
	get rejectedMultipleFiles()
	{
		return this.#_rejectedMultipleFiles;
	}

	/**
	 * Gets the invalid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	get invalidSelectedFiles()
	{
		return this.#_invalidSelectedFiles;
	}

	/**
	 * Gets the valid files dropped on or selected with the file drop zone.
	 * @type {Collection<File>}
	 */
	get validSelectedFiles()
	{
		return this.#_validSelectedFiles;
	}

	/**
	 * Gets the accepted file types.
	 * @returns {Array<String>} The accepted file types.
	 */
	get acceptedFileTypes()
	{
		return this.#_acceptedFileTypes;
	}

	/**
	 * Gets if multiple files can be dropped or selected.
	 * @returns {Boolean} True if multiple files can be dropped or selected, otherwise false.
	 */
	get isMultipleFile()
	{
		return this.#_isMultipleFile;
	}

	/**
	 * Gets the multiple file rejected event.
	 * @type {Function}
	 */
	get multipleFileRejectedEvent()
	{
		return new EventManager( MultipleFileRejectedEvent, this );
	}

	/**
	 * Gets the invalid file selected event.
	 * @type {Function}
	 */
	get invalidFileSelectedEvent()
	{
		return new EventManager( InvalidFileSelectedEvent, this );
	}

	/**
	 * Gets the multiple file rejected event.
	 * @type {Function}
	 */
	get validFileSelectedEvent()
	{
		return new EventManager( ValidFileSelectedEvent, this );
	}

	/**
	 * Adds additional default attributes.
	 */
	#addAdditionalDefaultAttributes()
	{
		this.#_fileDropZone.setAttribute( 'data-is-dragover', BooleanString.FALSE );
	}

	/**
	 * Determines the valid droppable and selectable file types.
	 */
	#determineAcceptedFileTypes()
	{
		const acceptedFileTypes  = this.#_fileDropZone.getAttribute( 'data-accepted-file-types' );
		this.#_acceptedFileTypes = null === acceptedFileTypes || '' === acceptedFileTypes
			? []
			: acceptedFileTypes
				.toLowerCase()
				.split( ', ' );
	}

	/**
	 * Determines if multiple files can be dropped or selected.
	 */
	#determineIsMultipleFile()
	{
		this.#_isMultipleFile = BooleanString.TRUE === this.#_fileDropZone.getAttribute( 'data-is-multiple-file' );
	}

	/**
	 * Creates the file selection dialog.
	 */
	#createFileSelectionDialog()
	{
		this.#_fileSelectionDialog =
			/** @type HTMLInputElement */
			DomHelper.createElementFromString(
				this.constructor.#FILE_SELECTION_DIALOG_CONTROL_TEMPLATE(
					this.constructor.#FILE_SELECTION_DIALOG_CONTROL_STYLES.join( ';' )
				)
			);

		if ( [] !== this.#_acceptedFileTypes )
		{
			this.#_fileSelectionDialog.accept = this.#_acceptedFileTypes.join( ', ' );
		}

		this.#_fileSelectionDialog.multiple = this.#_isMultipleFile;
	}

	/**
	 * Attaches all necessary event handlers.
	 */
	#addEventHandlers()
	{
		const propagationStoppingEventHandler     = ( event ) =>
		{
			event.preventDefault();
			event.stopPropagation();
		};
		const settingIsDraggedOverEventHandler    = ( event ) =>
		{
			this.#_fileDropZone.setAttribute( 'data-is-dragover', BooleanString.TRUE );
		};
		const settingIsNotDraggedOverEventHandler = ( event ) =>
		{
			this.#_fileDropZone.setAttribute( 'data-is-dragover', BooleanString.FALSE );
		};
		const openSelectionDialogEventHandler     = ( event ) =>
		{
			this.#_fileSelectionDialog.clickEvent.dispatch();
		};
		const determineDroppedFilesEventHandler   = ( event ) =>
		{
			this.#addSelectedFiles( event.dataTransfer.files );
		};
		const determineDialogFilesEventHandler    = ( event ) =>
		{
			this.#addSelectedFiles( event.target.files );
		};

		this.#_fileDropZone.dragEvent( propagationStoppingEventHandler );
		this.#_fileDropZone.dragStartEvent( propagationStoppingEventHandler );
		this.#_fileDropZone.dragEndEvent( propagationStoppingEventHandler, settingIsNotDraggedOverEventHandler );
		this.#_fileDropZone.dragOverEvent( propagationStoppingEventHandler, settingIsDraggedOverEventHandler );
		this.#_fileDropZone.dragEnterEvent( propagationStoppingEventHandler, settingIsDraggedOverEventHandler );
		this.#_fileDropZone.dragLeaveEvent( propagationStoppingEventHandler, settingIsNotDraggedOverEventHandler );
		this.#_fileDropZone.dropEvent(
			propagationStoppingEventHandler,
			settingIsNotDraggedOverEventHandler,
			determineDroppedFilesEventHandler
		);
		this.#_fileDropZone.clickEvent( propagationStoppingEventHandler, openSelectionDialogEventHandler );
		this.#_fileSelectionDialog.changeEvent( determineDialogFilesEventHandler );
	}

	/**
	 * Adds the file selection dialog to the control.
	 */
	#addFileSelectionDialog()
	{
		DomHelper.appendChildren( this.#_fileDropZone, this.#_fileSelectionDialog );
	}

	/**
	 * Adds the selected files to the file drop zone.
	 * @param {FileList} files The files to add.
	 */
	#addSelectedFiles( files )
	{
		this.#_rejectedMultipleFiles = new Collection();
		this.#_invalidSelectedFiles  = new Collection();
		this.#_validSelectedFiles    = new Collection();

		/**
		 * @type {Collection<File>}
		 */
		const preparedFiles = new Collection();

		if ( false === this.#_isMultipleFile )
		{
			preparedFiles.add( files[ 0 ] );

			for ( let n = files.length - 1; n < files.length; n++ )
			{
				this.#_rejectedMultipleFiles.add( files[ n ] );
				this.multipleFileRejectedEvent.dispatch(
					new FileEventArguments( files[ n ] )
				);
			}
		}
		else
		{
			preparedFiles.add( ...files );
		}

		preparedFiles.forEach(
			( file ) =>
			{
				const isFileValid = [] === this.#_acceptedFileTypes ||
					this.#_acceptedFileTypes.includes(
						file.type.toLowerCase()
					);

				const eventArguments = new FileEventArguments( file );

				if ( false === isFileValid )
				{
					this.#_invalidSelectedFiles.add( file );
					this.invalidFileSelectedEvent.dispatch( eventArguments );
				}
				else
				{
					this.#_validSelectedFiles.add( file );
					this.validFileSelectedEvent.dispatch( eventArguments );
				}

				return isFileValid;
			}
		);
	}

	/**
	 * Shows the control.
	 */
	show()
	{
		this.#_fileDropZone.style.setProperty( 'display', 'block', 'important' );
	}

	/**
	 * Hides the control.
	 */
	hide()
	{
		this.#_fileDropZone.style.setProperty( 'display', 'none', 'important' );
	}

	/**
	 * Appends the control.
	 */
	append()
	{
		this.#addAdditionalDefaultAttributes();
		this.#determineAcceptedFileTypes();
		this.#determineIsMultipleFile();
		this.#createFileSelectionDialog();
		this.#addFileSelectionDialog();
		this.#addEventHandlers();
	}
}
