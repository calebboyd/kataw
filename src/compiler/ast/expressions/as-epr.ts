import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { TypeNode } from '../types';
import { Expression } from './';

export interface AsExpression extends Node {
  readonly expression: Expression;
  readonly type: TypeNode;
}

export function createAsExpression(
  expression: Expression,
  type: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): AsExpression {
  return {
    kind: NodeKind.AsExpression,
    expression,
    type,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateAsExpression(node: AsExpression, expression: Expression, type: TypeNode): AsExpression {
  return node.expression !== expression || node.type !== type
    ? updateNode(createAsExpression(expression, type, node.flags, node.start, node.end), node)
    : node;
}
