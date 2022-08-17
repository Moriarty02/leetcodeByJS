/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
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
var deepestLeavesSum = function (root) {
  let queue = [];
  let levelSums = 0;
  if (!root) return 0;
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let sum = 0;
    while (size !== 0) {
      let cur = queue.shift();
      size--;
      sum += cur.val;
      if (size === 0) {
        levelSums = sum;
      }
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }
  return levelSums
};
// @lc code=end
