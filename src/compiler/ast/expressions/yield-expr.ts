import { Expression } from '.';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

/**
 * Yield expression.
 */
export interface YieldExpression extends Node {
  readonly delegate: boolean;
  readonly expression: Expression | null;
}

export function createYieldExpression(
  delegate: boolean,
  expression: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): YieldExpression {
  return {
    kind: NodeKind.YieldExpression,
    delegate,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | TransformFlags.ES2018 | TransformFlags.Yield,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateYieldExpression(node: YieldExpression, expression: Expression | null): YieldExpression {
  return node.expression !== expression
    ? updateNode(createYieldExpression(node.delegate, expression, node.flags, node.start, node.end), node)
    : node;
}
