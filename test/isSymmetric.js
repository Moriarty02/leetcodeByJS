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
 *  既 一个节点的左右子树 val 和 left right 相等 然
 *      1
 *    2    2
 * 3  4  4   3
 */
import { TreeNode } from "./binaryTree.js";
// case 1
// let cas1 = new TreeNode(3);
// let node9 = new TreeNode(9);
// let shadown_node9 = new TreeNode(9);
// let node15 = new TreeNode(15);
// let node7 = new TreeNode(7);
// cas1.left = node9;
// cas1.right = shadown_node9;
// node9.left = node15;
// node9.right = node7;
// shadown_node9.left = node7;
// shadown_node9.right = node15;
// case2 
let case2 = new TreeNode(1);
let node2 = new TreeNode(2);
let shadow_node2 = new TreeNode(2);
let node3 = new TreeNode(3);
case2.left = node2;
case2.right = shadow_node2;
node2.right = node3;
shadow_node2.right = node3;

var isSymmetric = function (root) {
  let queue = [];
  if (!root) return false;
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    let levelNodes = [];
    while (size > 0) {
      let current = queue.shift();
      size--;
      /****
       * 判空的位置错了 为null 依然要写到 levelNodes
       */
      // if (current === null) continue;

      if (current) {
        levelNodes.push(current.val);
      } else {
        levelNodes.push(null);
      }
      // 如果当前节点为空 就不要后面的逻辑 避免塞null的子节点 null到队列中
      if (current === null) continue;
      if (current.left) {
        queue.push(current.left);
      } else {
        queue.push(null);
      }
      if (current.right) {
        queue.push(current.right);
      } else {
        queue.push(null);
      }
    }
    let i = 0;
    while (i <= levelNodes.length / 2) {
      if (levelNodes[i] !== levelNodes[levelNodes.length - i - 1]) return false;
      i++;
    }
  }
  return true;
};
// console.log(isSymmetric(case1));
// console.log(isSymmetric(case2));
