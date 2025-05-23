import { util } from 'prettier';

import type { Comment, CollectionNode } from '../../slang-nodes/types.d.ts';

const { addDanglingComment, addTrailingComment } = util;

export default function addCollectionNodeLastComment(
  node: CollectionNode,
  comment: Comment
): void {
  if (node.items.length === 0) {
    addDanglingComment(node, comment, false);
  } else {
    addTrailingComment(node.items[node.items.length - 1], comment);
  }
}
