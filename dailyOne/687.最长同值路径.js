/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function(root) {
    let ret = 0;
    function dfs(root){
        if(!root){
            return 0;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        let leftPath = 0;
        let rightPath = 0;
        if(root.left && root.left.val==root.val){
            leftPath = left+1;
        }
        if(root.right && root.right.val==root.val){
            rightPath = right+1;
        }
        ret = Math.max(ret,leftPath+rightPath);
        return Math.max(leftPath,rightPath);
    }
    dfs(root);
    return ret
};
// @lc code=end

