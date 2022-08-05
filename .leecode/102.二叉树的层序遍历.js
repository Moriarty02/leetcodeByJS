/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
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
// @lc code=end

