/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % k !== 0) return false;
  let target = sum / k;
  nums.sort((a, b) => b - a);

  return backTrack(nums, 0, new Array(k).fill(0), k, target);
};
var backTrack = (nums, index, buket, k, target) => {
  if (index === nums.length) return true;
  for (let i = 0; i < k; i++) {
    if (i > 0 && buket[i] === buket[i - 1]) continue;
    if (buket[i] + nums[index] <= target) {
      buket[i] += nums[index];
      if (backTrack(nums, index + 1, buket, k, target)) return true;
      buket[i] -= nums[index];
    }
  }
  return false;
};
// @lc code=end
