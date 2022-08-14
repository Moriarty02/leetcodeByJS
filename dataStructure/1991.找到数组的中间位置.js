/*
 * @lc app=leetcode.cn id=1991 lang=javascript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  /**
   *    左边为 leftSum
   *   总和为 total
   *  右边和为 rightSum
   *  对于坐标 K 结束条件为 leftSum = rightSum
   *      leftSum =total-rightSum-nums[k]
   *  既 2leftSum= total-nums[k]
   */
  if (!nums || nums.length === 0) return -1;
  let leftSum = 0;
  let total = nums.reduce((a, b) => a + b, 0);
  let k = 0;
  while (k < nums.length) {
    if (2 * leftSum === total - nums[k]) {
      return k;
    }
    leftSum += nums[k++];
  }
  return -1;
};
// @lc code=end
