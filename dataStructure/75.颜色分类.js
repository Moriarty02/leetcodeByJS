/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let len = nums.length;
  let p0 = 0,
    p2 = len - 1;
  for (let i = 0; i <= p2; i++) {
    // 如果是2 则p2 一直往前移动到不是2的位置
    while (i <= p2 && nums[i] === 2) {
      swap(nums, i, p2);
      p2--;
    }
    if (nums[i] === 0) {
      swap(nums, i, p0);
      p0++;
    }
  }
};

var swap = function (nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// @lc code=end
