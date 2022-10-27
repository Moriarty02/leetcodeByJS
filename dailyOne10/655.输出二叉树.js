/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function(root) {
    /**
     * 整体思路：
     * 先求到树的深度，然后根据深度和宽度，构造一个二维数组
     * root.val放在二维数组的中间位置，然后递归遍历左右子树
     * 然后再用dfs的方式，将树的节点填充到二维数组中
     * 
     */
    // 1. 求出树的深度 最后打印一定需要一个满二叉树的结构 深度就是树的高度
    let depth = getDepth(root)
    // 2. 求出树的宽度 2^depth - 1 满二叉树的性质
    let width = Math.pow(2, depth) - 1
    let res = new Array(depth).fill(0).map(() => new Array(width).fill(''))
    dfs(root, 0, 0, width - 1, res)
    return res
};

var  dfs = function(root, depth, left, right, res) {
    //  左右边界 取中间位置放置 root
    // 然后分别递归遍历左右子树
    // 每次往下一层的时候，深度 + 1
    if (!root) return
    let mid = Math.floor((left + right) / 2)
    res[depth][mid] = root.val + ''
    dfs(root.left, depth + 1, left, mid - 1, res)
    dfs(root.right, depth + 1, mid + 1, right, res)
}
var getDepth = function(root) {
    if (!root) return 0
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1
}

// @lc code=end

