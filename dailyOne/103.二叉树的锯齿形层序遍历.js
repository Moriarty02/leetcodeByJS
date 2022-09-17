/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 var zigzagLevelOrder = function (root) {
    let ret = [];
    let queue = [];
    if (!root) return [];
    queue.push(root);
    let direction = false; // false ->  true <-
  
    while (queue.length !== 0) {
      let size = queue.length;
      let childs = [];
      while (size > 0) {
        let current = queue.shift();
        size--;
        if (direction) {
          childs.unshift(current.val);
        } else {
          childs.push(current.val);
        }
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
      ret.push(childs);
      direction = !direction;
    }
    return ret;
  };
// @lc code=end

