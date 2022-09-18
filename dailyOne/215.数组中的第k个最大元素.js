/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let len = nums.length;
  let target = len - k;
  let left = 0;
  let right = len - 1;
  while (true) {
    let index = partition(nums, left, right);
    if (index === target) {
      return nums[index];
    } else if (index > target) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
};
var partition = function (nums, left, right) {
  let pivot = left + Math.floor(Math.random() * (right - left + 1));
  swap(nums, pivot, right);
  let storeIndex = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < nums[right]) {
      swap(nums, storeIndex, i);
      storeIndex++;
    }
  }
  swap(nums, storeIndex, right);
  return storeIndex;
};
var swap = function (nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

// @lc code=end
