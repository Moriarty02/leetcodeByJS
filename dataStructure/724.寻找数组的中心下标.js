/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (!nums || nums.length === 0) return -1;
  let pivotIndex = 0;
  let currentSum = 0;
  let leftSum = 0;
  let rightSums = new Array(nums.length).fill(0);
  for (let j = nums.length - 1; j >= 0; j--) {
    currentSum += nums[j];
    rightSums[j] = currentSum;
  }
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    if (leftSum === rightSums[i]) return i;
  }
  return -1;
};
// let case1 = [2, 1, -1]

// console.log(pivotIndex(case1));
// @lc code=end
