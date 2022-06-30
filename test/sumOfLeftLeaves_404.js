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
 */
import { demoNode } from "./levelOrderBottom_107.js";
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let queue = [];
  queue.push(root);
  let sum = 0;
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.left) {
      if (isLeaef(current.left)) {
        sum += current.left.val;
      } else {
        queue.push(current.left);
      }
    }
    if (current.right) {
      if (!isLeaef(current.right)) {
        queue.push(current.right);
      }
    }
  }
  return sum
};
let isLeaef = (node) => !node.left && !node.right;
// console.log("sumOfLeftLeaves");
// console.log(sumOfLeftLeaves(demoNode));
