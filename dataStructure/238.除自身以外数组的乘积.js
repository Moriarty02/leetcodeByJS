/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
//   let left = new Array(nums.length);
  let right = new Array(nums.length);
  let answer = new Array(nums.length);
  answer[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  right[nums.length - 1] = 1;
  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }
  for (let k = 0; k < answer.length; k++) {
    answer[k] = answer[k] * right[k];
  }
  return answer;
};
// @lc code=end
