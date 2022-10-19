/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  return Math.max(
    // 偷第一家，不偷最后一家
    robRange(nums, 0, nums.length - 2),
    // 不偷第一家，偷最后一家 不偷0，偷1 就会尝试偷最后一家
    robRange(nums, 1, nums.length - 1)
  );
};
var robRange = function (nums, start, end) {
// dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
// first = dp[i - 2], second = dp[i - 1], third = dp[i]
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};

// @lc code=end
