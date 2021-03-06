import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Jsx identifier
 */
export interface JsxIdentifier extends Node {
  readonly text: string;
}

export function createJsxIdentifier(text: string, start: number, end: number): JsxIdentifier {
  return {
    kind: NodeKind.JsxIdentifier,
    text,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
