import { Expression } from '.';
import { CallChain } from './call-chain';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { PrivateIdentifier } from './private-identifier';
import { IdentifierName } from './identifier-name';
import { ElementAccessChain } from './element-access-chain';

/**
 * PropertyAccessChain expression.
 */
export interface PropertyAccessChain extends Node {
  readonly chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  readonly expression: Expression | IdentifierName | PrivateIdentifier | null;
}

export function createPropertyAccessChain(
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null,
  expression: Expression | IdentifierName | PrivateIdentifier | null,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyAccessChain {
  return {
    kind: NodeKind.PropertyAccessChain,
    chain,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2020,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updatePropertyAccessChain(
  node: PropertyAccessChain,
  chain: PropertyAccessChain | ElementAccessChain | CallChain | null,
  expression: Expression | IdentifierName | PrivateIdentifier | null
): PropertyAccessChain {
  return node.chain !== chain || node.expression !== expression
    ? updateNode(createPropertyAccessChain(chain, expression, node.flags, node.start, node.end), node)
    : node;
}
