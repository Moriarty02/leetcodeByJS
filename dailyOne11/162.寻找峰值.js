/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 输入：nums = [1,2,1,3,5,6,4]
   输出：1 或 5 
 */
var findPeakElement = function (nums) {
  // 因为左右边界为-∞，所以一定会有疯子存在
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    // 如果中间的数比右边的数小，有峰值在右边
    // 如果中间的数比右边的数大，有峰值在左边
    if (nums[mid] < nums[mid + 1]) {
        // 因为 mid+1的值比mid大，所以mid不是峰值，所以left = mid + 1
      left = mid + 1;
    } else {
        // 因为 mid+1的值比mid小，所以mid+1不是峰值，所以right = mid
      right = mid;
    }
  }
  return left;
};
// @lc code=end
