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

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
node1.right = node2;
node2.left = node3;
var inorderTraversal = function (root) {
  let ret = [];
  let travel = (root, ret) => {
    if (!root) return;
    if (root.left) {
      travel(root.left, ret);
    }
    ret.push(root.val);
    if (root.right) {
      travel(root.right, ret);
    }
  };
  travel(root, ret);
  return ret;
};
// console.log("inorderTraversal");
// console.log(inorderTraversal(node1));
