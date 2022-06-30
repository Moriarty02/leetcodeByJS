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
 * @return {number[][]}
 */
import { TreeNode } from "./binaryTree.js";

let node3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;
var levelOrder = function (root) {
  let ret = [];
  let queue = [];
  if (!root) return [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let childs = [];
    while (size > 0) {
      let current = queue.shift();
      size--;
      childs.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    ret.push(childs);
  }
  return ret;
};
// console.log("levelOrder");
// let result = levelOrder(node3);
// console.log(result);
