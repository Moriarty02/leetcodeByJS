/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var preorder = function (root) {
//   let ret = [];
//   preTraversal(root, ret);
//   return ret;
// };
// let preTraversal = (root, ret) => {
//   if (!root) return;
//   ret.push(root.val);
//   for (const child of root.children) {
//     preTraversal(child, ret);
//   }
// };

// 迭代
var preorder = function (root) {
  const ret = [];
  if (root === null) return ret;
  const stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    const node = stack.pop();
    ret.push(node.val);
    for (let i = node.children.length - 1; i >= 0; --i) {
      stack.push(node.children[i]);
    }
  }
  return ret;
};
// @lc code=end
