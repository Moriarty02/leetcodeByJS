/*
 * @lc app=leetcode.cn id=1822 lang=javascript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 输入：nums = [-1,-2,-3,-4,3,2,1]
   输出：1
 */
var arraySign = function (nums) {
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    } else if (nums[i] < 0) {
      res *= -1;
    }
  }
  return res;
};
// @lc code=end
