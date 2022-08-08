/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  var helper = function (root, targetSum, currentSum) {
    if (!root) return false;
    currentSum += root.val;
    if (!root.left && !root.right) {
      return currentSum === targetSum;
    }
    return (
      helper(root.left, targetSum, currentSum) ||
      helper(root.right, targetSum, currentSum)
    );
  };
  return helper(root, targetSum, 0);
};

// @lc code=end
