import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { Expression, Binding } from '../expressions';
import { TypeNode } from '../types';
/**
 * Lexical binding
 */

export interface LexicalBinding extends Node {
  readonly binding: Binding;
  readonly exclamation: boolean;
  readonly type: TypeNode | null;
  readonly initializer: Expression | null;
}

export function createLexicalBinding(
  binding: Binding,
  exclamation: boolean,
  type: TypeNode | null,
  initializer: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): LexicalBinding {
  return {
    kind: NodeKind.LexicalBinding,
    binding,
    exclamation,
    type,
    initializer,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateLexicalBinding(
  node: LexicalBinding,
  binding: Binding,
  type: TypeNode | null,
  initializer: Expression | null
): LexicalBinding {
  return node.binding !== binding || node.type !== type || node.initializer !== initializer
    ? updateNode(
        createLexicalBinding(binding, node.exclamation, type, initializer, node.flags, node.start, node.end),
        node
      )
    : node;
}
