import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * This expression.
 */
export type ThisExpression = Node;

export function createThisExpression(flags: NodeFlags, start: number, end: number): ThisExpression {
  return {
    kind: NodeKind.ThisExpression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
