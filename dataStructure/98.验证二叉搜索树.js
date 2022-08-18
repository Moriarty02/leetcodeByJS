/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = -Infinity;
  // 利用二叉搜索树特点 【中序】遍历一定是递增
  // prev记录之前访问的值 和当前值做比较
  let traversal = (root) => {
    if (!root) return true;
    if (!traversal(root.left)) return false;
    if (root.val <= prev) return false;
    prev = root.val;
    return traversal(root.right);
  };
  return traversal(root);
};
// @lc code=end
