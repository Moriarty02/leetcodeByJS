/*
 * @lc app=leetcode.cn id=1800 lang=javascript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        max = Math.max(max, sum)
    }
    return max
};
// @lc code=end

