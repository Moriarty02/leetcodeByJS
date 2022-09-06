/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let res = [];
    let map = new Map();
    let dfs = (root) => {
        if (!root) return '#';
        let left = dfs(root.left);
        let right = dfs(root.right);
        let str = left + ',' + right + ',' + root.val;
        if (map.has(str)) {
            if (map.get(str) === 1) res.push(root);
            map.set(str, map.get(str) + 1);
        } else {
            map.set(str, 1);
        }
        return str;
    }
    dfs(root);
    console.log(map);

    return res;
};
// @lc code=end

