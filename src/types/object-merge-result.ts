'use strict';

/**
 * Represents the resulting type of merging objects into a target object, with later source properties overwriting earlier ones.
 * @template TTarget The type of the target object.
 * @template TSources The tuple of source object types to merge.
 * @author Christian Ramelow <info@codekandis.net>
 */
export type ObjectMergeResult<TTarget extends object, TSources extends object[]> =
	TSources extends [ infer TSource extends object, ...infer TRest extends object[] ]
		? ObjectMergeResult<Omit<TTarget, keyof TSource> & TSource, TRest>
		: TTarget;
