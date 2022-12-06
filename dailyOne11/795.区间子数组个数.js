/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var numSubarrayBoundedMax = function(nums, left, right) {
    return count(nums, right) - count(nums, left - 1);
}

const count = (nums, lower) => {
    let res = 0, cur = 0;
    for (const x of nums) {
        cur = x <= lower ? cur + 1 : 0;
        res += cur;
    }
    return res;
};  

// @lc code=end

