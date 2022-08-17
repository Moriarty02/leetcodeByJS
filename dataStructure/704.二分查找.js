/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;
  let high = nums.length - 1;
  let low = 0;
  let mid = -1;
  while (low <= high) {
    mid = Math.ceil((high + low) / 2);
    console.log(nums[mid]);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
// let testCase = [-1, 0, 3, 5, 9, 12];
// console.log(search(testCase, 9));
// @lc code=end
