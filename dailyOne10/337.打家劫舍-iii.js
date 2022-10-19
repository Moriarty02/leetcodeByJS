/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
  const map = new Map();
  return robRange(root, map);
};
var robRange = function (root, map) {
  if (root === null) {
    return 0;
  }
  // memo 如果之前计算过，直接返回 类似fib
  if (map.has(root)) {
    return map.get(root);
  }
  // 只有两种情况
  // 1. 抢当前节点，然后去下下家 即root +左节点的下家[root.left.left + root.left.right] + 右节点的下家[root.right.left + root.right.right]
  // 2. 不抢当前节点，去下家 即左节点+右节点
  let money = root.val;
  if (root.left !== null) {
    money += robRange(root.left.left, map) + robRange(root.left.right, map);
  }
  if (root.right !== null) {
    money += robRange(root.right.left, map) + robRange(root.right.right, map);
  }
  let result = Math.max(
    money, // 抢当前节点
    robRange(root.left, map) + robRange(root.right, map) // 不抢当前节点
  );
  map.set(root, result);
  return result;
};

// @lc code=end
