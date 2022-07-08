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
 * @return {number[]}
 */
import { TreeNode } from "./binaryTree.js";
let case2 = new TreeNode(1);
let node2 = new TreeNode(2);
let shadow_node2 = new TreeNode(2);
let node3 = new TreeNode(3);
case2.left = node2;
case2.right = shadow_node2;
node2.right = node3;
shadow_node2.right = node3;
var preorderTraversal = function (root) {
  let ret = [];
  let traversal = (root, ret) => {
    if (!root) return;
    ret.push(root.val);
    traversal(root.left, ret);
    traversal(root.right, ret);
  };
  traversal(root, ret);
  return ret;
};
// console.log("preorderTraversal");
// console.log(preorderTraversal(case2));
