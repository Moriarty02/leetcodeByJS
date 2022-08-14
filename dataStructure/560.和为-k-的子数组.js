/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (!nums && nums.length === 0) return 0;
  let count = 0;
  for (let end = 0; end < nums.length; end++) {
    let leftSum = 0;
    for (let start = end; start >= 0; start--) {
        leftSum += nums[start];
      if (leftSum === k) {
        count++;
      }
    }
  }

  return count;
};
// @lc code=end
