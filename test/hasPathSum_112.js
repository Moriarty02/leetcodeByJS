/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
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
/****
 *       3
 *    9    20
 *       15   7
 */

var hasPathSum = function (root, targetSum) {
  let flag = false;
  let traverse = function (root, sum) {
    if (flag) return;//已找到后续就不要在执行了
    if (root === null) return;
    if (!root.left && !root.right) {
      // 叶子节点
      if (sum + root.val === targetSum) {
        flag = true;
        return;
      }
    }
    if (root.left) {
      traverse(root.left, sum + root.val);
    }
    if (root.right) {
      traverse(root.right, sum + root.val);
    }
  };
  traverse(root, 0);
  return flag;
};
// console.log("hasPathSum");
// console.log(hasPathSum(node3, 12));
