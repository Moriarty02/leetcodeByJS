/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 * 输入：nums = [3,30,34,5,9]
   输出："9534330"
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let s1 = a + '' + b;
        let s2 = b + '' + a;
        return s2 - s1;
    });
    if (nums[0] === 0) return '0';
    return nums.join('');
};
// @lc code=end

