'use strict';

/**
 * Represents a formatter that substitutes values for indexed placeholders in a string template.
 * @param replacements The values to insert at the corresponding placeholder indices.
 * @returns The formatted string.
 * @throws {InvalidIndexException} A specific placeholder is invalid.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type StringFormatter = ( ...replacements: string[] ) => string;
