import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

import { RootNode } from '../root-node';
import { Expression } from '../expressions';

export interface ExportAssignment extends Node {
  readonly expression: Expression;
  /* @internal */
  readonly parent: RootNode | null;
}

export function createExportAssignment(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ExportAssignment {
  return {
    kind: NodeKind.ExportAssignment,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
