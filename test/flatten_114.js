/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
import { TreeNode } from "./binaryTree.js";

import { root } from "./commonTree.js";
import { log } from "./log.js";
var flatten = function (root) {
  let arr = [];
  let traversal = (root, arr) => {
    if (!root) return;
    arr.push(root);
    traversal(root.left, arr);
    traversal(root.right, arr);
  };
  traversal(root, arr);

  for (let i = 1; i < arr.length; i++) {
    let pre = arr[i - 1];
    let current = arr[i];
    pre.left = null;
    pre.right = current;
  }
  return arr[0];
};
// log(flatten, root);
