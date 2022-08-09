/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        //  用异或运算 ^ 可以得到两个数字不同的部分
        result ^= nums[i];
    }
    return result;
};
// @lc code=end
