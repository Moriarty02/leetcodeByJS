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
import { TreeNode } from "./binaryTree.js";
// import { binaryTreePaths } from "./binaryTreePaths.js";
let node3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
let test = new TreeNode("test");
node9.right = test;

node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;
var maxDepth = function (root) {
  let depth = 0;
  let queue = [];
  if(!root) return 0
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      let current = queue.shift();
      size--;
      if (size === 0) {// size 为同层的个数 为0表示这一层遍历完了
        depth++;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return depth;
};
// console.log("maxDepth");
// console.log(binaryTreePaths(node3));
// console.log(maxDepth(node3));
