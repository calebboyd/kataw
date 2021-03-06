import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { TemplateSpan } from './template-span';
import { TemplateTail } from './template-tail';

/**
 * Template expression.
 */
export interface TemplateExpression extends Node {
  readonly spans: readonly TemplateSpan[];
  readonly tail: TemplateTail;
}

export function createTemplateExpression(
  spans: readonly TemplateSpan[],
  tail: TemplateTail,
  flags: NodeFlags,
  start: number,
  end: number
): TemplateExpression {
  return {
    kind: NodeKind.TemplateExpression,
    spans,
    tail,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTemplateExpression(
  node: TemplateExpression,
  spans: readonly TemplateSpan[],
  tail: TemplateTail
): TemplateExpression {
  return node.spans !== spans || node.tail !== tail
    ? updateNode(createTemplateExpression(spans, tail, node.flags, node.start, node.end), node)
    : node;
}
