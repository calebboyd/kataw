import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { Expression } from '.';
import { SpreadElement } from './spread-element';
import { Elison } from './elison';

/**
 * Array element list
 */
export interface ElementList extends Node {
  readonly elements: (Elison | SpreadElement | Expression)[];
  readonly trailingComma: boolean;
  /* @internal */
  readonly multiline: boolean;
}

export function createElementList(
  elements: (Elison | SpreadElement | Expression)[],
  trailingComma: boolean,
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ElementList {
  return {
    kind: NodeKind.ElementList,
    elements,
    trailingComma,
    multiline,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateElementList(node: ElementList, elements: (Elison | SpreadElement | Expression)[]): ElementList {
  return node.elements !== elements
    ? updateNode(
        createElementList(elements, node.trailingComma, node.multiline, node.flags, node.start, node.end),
        node
      )
    : node;
}
