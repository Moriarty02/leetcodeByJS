/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
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
// @lc code=end

