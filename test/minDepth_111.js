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
 * @return {number}
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。
 */

import { TreeNode } from "./binaryTree.js";

let node3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
node3.right = node9;
node9.right = node20;
node20.right = node15;
node15.right = node7;
let min = Number.MAX_VALUE;
let traversal = (root, depth) => {
  if (!root) return;
  if (!root.left && !root.right) {
    min = Math.min(min, depth);
  }
  traversal(root.left, depth + 1);
  traversal(root.right, depth + 1);
};
var minDepth = function (root) {
  if (!root) return 0;
  traversal(root, 1);
  return min;
};
// console.log("minDepth");
// console.log(minDepth(node3));
