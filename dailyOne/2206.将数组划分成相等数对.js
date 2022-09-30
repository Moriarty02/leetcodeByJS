/*
 * @lc app=leetcode.cn id=2206 lang=javascript
 *
 * [2206] 将数组划分成相等数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let values = [...map.values()];
  let i = 0;
  while (i < values.length) {
    if (values[i] % 2 !== 0) return false;
    i++
  }
  return true;
};
// @lc code=end
