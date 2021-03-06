import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { Statement } from '.';
import { Expression } from '../expressions';

/**
 * Do-while statement.
 */
export interface DoWhileStatement extends Node {
  readonly expression: Expression;
  readonly statement: Statement;
}

export function createDoWhileStatement(
  expression: Expression,
  statement: Statement,
  flags: NodeFlags,
  start: number,
  end: number
): DoWhileStatement {
  return {
    kind: NodeKind.DoWhileStatement,
    expression,
    statement,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateDoWhileStatement(
  node: DoWhileStatement,
  expression: Expression,
  statement: Statement
): DoWhileStatement {
  return node.expression !== expression || node.statement !== statement
    ? updateNode(createDoWhileStatement(expression, statement, node.flags, node.start, node.end), node)
    : node;
}
