import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';
import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * NamedTupleMember
 */

export interface NamedTupleMember extends Node {
  readonly ellipsis: boolean;
  readonly name: IdentifierReference;
  readonly optional: boolean;
  readonly type: TypeNode;
}

export function createNamedTupleMember(
  ellipsis: boolean,
  name: IdentifierReference,
  optional: boolean,
  type: TypeNode,
  start: number,
  end: number
): NamedTupleMember {
  return {
    kind: NodeKind.NamedTupleMember,
    ellipsis,
    name,
    optional,
    type,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
