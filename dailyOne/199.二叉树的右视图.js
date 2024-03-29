/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let node = null;
        for (let i = 0; i < len; i++) {
        node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        }
        res.push(node.val);
    }
    return res;
};
// @lc code=end

