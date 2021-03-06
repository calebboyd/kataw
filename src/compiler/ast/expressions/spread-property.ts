import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { Expression } from '.';
import { transformES2018 } from 'transform/transformers/es2018';

// [MODIFIED]

/**
 * Spread property
 */
export interface SpreadProperty extends Node {
  readonly argument: Expression;
}

export function createSpreadProperty(
  argument: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): SpreadProperty {
  return {
    kind: NodeKind.SpreadProperty,
    argument,
    flags,
    intersects: false,
    transformFlags: TransformFlags.RestOrSpread | TransformFlags.ES2018,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateSpreadProperty(node: SpreadProperty, argument: Expression): SpreadProperty {
  return node.argument !== argument
    ? updateNode(createSpreadProperty(argument, node.flags, node.start, node.end), node)
    : node;
}
