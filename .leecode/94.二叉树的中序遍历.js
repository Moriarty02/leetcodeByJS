/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
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
// @lc code=end

