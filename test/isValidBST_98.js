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
 * @return {boolean}
 */
import { buildBST } from "./sortedArrayToBST_108.js";
import { TreeNode } from "./binaryTree.js";
import { log } from "./log.js";
var isValidBST = function (root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  let prev = -Infinity;
  let flag = true;
  let traversal = (root) => {
    if (!root) return;
    traversal(root.left);
    if (root.val <= prev) {
      flag = false;
      return;
    } else {
      prev = root.val;
    }
    traversal(root.right);
  };
  traversal(root);
  return flag;
};
// better
var isValidBST = function (root) {
  let prev = -Infinity;
  let traversal = function (root) {
    if (!root) return true;
    if (!traversal(root.left)) return false;

    if (root.val <= prev) return false;
    prev = root.val;
    return traversal(root.right);
  };
  return traversal(root)
};
// let bst = buildBST([0,-1]);
// console.log(bst);
let head = new TreeNode(0);
let head_1 = new TreeNode(-1);
head.left = head_1;

// log(isValidBST, head);
