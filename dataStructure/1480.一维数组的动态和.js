/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function (nums) {
    if (!nums || nums.length === 0) return null;
    let currentSum = 0;
    return nums.map((num) => {
      currentSum += num;
      return currentSum;
    });
  };
// @lc code=end

