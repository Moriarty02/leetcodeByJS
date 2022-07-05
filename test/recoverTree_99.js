/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
import { TreeNode } from "./binaryTree.js";
import { bstHead } from "./commonTree.js";
import { log } from "./log.js";
var recoverTree = function (root) {
  let items = [];

  middTraverse(root, items);
  let errorIndex1 = null;
  let errorIndex2 = null;
  for (let i = 0; i < items.length - 1; i++) {
    if (items[i + 1].val < items[i].val) {
      errorIndex2 = i + 1;
      if (errorIndex1 == null) {
        errorIndex1 = i;
      }

      // if (errorIndex1 === null) {
      //   errorIndex1 = i;
      // } else {
      //   errorIndex2 = i + 1;
      // }
    }
  }

  switchNode(items[errorIndex1], items[errorIndex2]);
  return root;
};
let middTraverse = (root, values) => {
  if (!root) return;
  middTraverse(root.left, values);
  values.push(root);
  middTraverse(root.right, values);
};
let switchNode = (head1, head2) => {
  let tmp = head2.val;
  if (head1 !== null && head2 !== null) {
    head2.val = head1.val;
    head1.val = tmp;
  }
};
// log(recoverTree, bstHead);
