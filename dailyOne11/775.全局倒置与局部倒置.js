/*
 * @lc app=leetcode.cn id=775 lang=javascript
 *
 * [775] 全局倒置与局部倒置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isIdealPermutation = function(nums) {
    // 1. 全局倒置：任意两个元素的降序
    // 2. 局部倒置：相邻两个元素的降序
    // 只要找到 非相邻且升序的元素，就不是全局倒置
    let n = nums.length, minSuff = nums[n - 1];
    for (let i = n - 3; i >= 0; i--) {
        if (nums[i] > minSuff) {
            return false;
        }
        minSuff = Math.min(minSuff, nums[i + 1]);
    }
    return true;
};
// @lc code=end

