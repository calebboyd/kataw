import { Expression } from '.';
import { BindingIdentifier } from './binding-identifier';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameters } from '../types/type-parameter-list';

/**
 * Class expression.
 */
export interface ClassExpression extends Node {
  readonly name: BindingIdentifier | null;
  readonly typeParameters: TypeParameters;
  readonly heritageClauses: Expression | null;
  readonly members: ClassElementList;
}

export function createClassExpression(
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  heritageClauses: Expression | null,
  members: ClassElementList,
  flags: NodeFlags,
  start: number,
  end: number
): ClassExpression {
  return {
    kind: NodeKind.ClassExpression,
    name,
    typeParameters,
    heritageClauses,
    members,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassExpression(
  node: ClassExpression,
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  heritageClauses: Expression | null,
  members: ClassElementList
): ClassExpression {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.heritageClauses !== heritageClauses ||
    node.members !== members
    ? updateNode(
        createClassExpression(name, typeParameters, heritageClauses, members, node.flags, node.start, node.end),
        node
      )
    : node;
}
