/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { TreeNode } from "./binaryTree.js";

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preLen = preorder.length;
  let inLen = inorder.length;
  if (preLen !== inLen) return null;
  let map = {};
  for (let i = 0; i < inLen; i++) {
    map[inorder[i]] = i;
  }
  return buildTreeHelper(preorder, 0, preLen - 1, inorder, 0, inLen - 1, map);
};
let buildTreeHelper = function (
  preorder,
  preStart,
  preEnd,
  inorder,
  inStart,
  inEnd,
  map
) {
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }
  let povit = preorder[preStart];
  let root = new TreeNode(povit);
  let povitIndex = map[povit];
  root.left = buildTreeHelper(
    preorder,
    preStart + 1,
    povitIndex - inStart + preStart,
    inorder,
    inStart,
    povitIndex - 1,
    map
  );
  root.right = buildTreeHelper(
    preorder,
    povitIndex - inStart + preStart + 1,
    preEnd,
    inorder,
    povitIndex + 1,
    inEnd,
    map
  );
  return root;
};
