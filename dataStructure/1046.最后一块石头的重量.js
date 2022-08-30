/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        let a = stones.shift()
        let b = stones.shift()
        if (a !== b) {
            stones.push(a - b)
        }
    }
    return stones[0] || 0
};
// @lc code=end

