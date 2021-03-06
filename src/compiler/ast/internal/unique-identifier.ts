import { Node, NodeKind, NodeFlags, TransformFlags, UniqueIdentifierFlags } from '../node';

/**
 * Unique identifier
 */
/* @internal */
export interface UniqueIdentifier extends Node {
  readonly uniqueFlags: UniqueIdentifierFlags;
  readonly uniqueId: number;
}

/* @internal */
export function createUniqueIdentifier(
  uniqueFlags: UniqueIdentifierFlags,
  uniqueId: number,
  reservedInNestedScopes?: boolean
): UniqueIdentifier {
  return {
    kind: NodeKind.UniqueIdentifier,
    uniqueFlags: reservedInNestedScopes ? uniqueFlags | UniqueIdentifierFlags.ReservedInNestedScopes : uniqueFlags,
    uniqueId,
    flags: NodeFlags.Synthetic,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start: -1,
    end: -1
  };
}
