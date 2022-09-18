/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return (function make(n, l) {
        if (n == null) {
            l.push('*');
        } else {
            l.push(n.val);
            make(n.left, l);
            make(n.right, l);
        }
        return l;
    })(root, []).join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    return (function make(s) {
        let v = s.shift();
        if (v == '*') {
            return null;
        }
        let n = new TreeNode(v);
        n.left = make(s);
        n.right = make(s);
        return n;
    })(data.split(','));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

