/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function (root) {
    // BFS +打标签
    // 当前节点 i 的左子节点为 2 * i + 1，右子节点为 2 * i + 2
    // 1. BFS遍历，每层遍历时，记录当前节点的索引
    // 2. 记录每层的最左节点的索引，计算当前节点索引与最左节点索引的差值
    // 3. 比较每层的最大宽度
    // 使用 bigint 是因为 2 ** 53 - 1 会溢出
    const queue = [[root, BigInt(1)]];
    let max = -1
    while (queue.length) {
        const size = queue.length
        max = Math.max(max, Number(queue[queue.length - 1][1] - queue[0][1] + BigInt(1)))
        for (let i = 0; i < size; i++) {
            const [node, index] = queue.shift()
            if(node.left){
                queue.push([node.left, index * BigInt(2)])
            }
            if(node.right){
                queue.push([node.right, index * BigInt(2) + BigInt(1)])
            }
           
        }
    }
    return max

};
// @lc code=end
