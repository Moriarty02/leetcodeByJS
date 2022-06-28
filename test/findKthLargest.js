/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。(会有相同数字)
 */

/*****
 * 输入: [3,2,1,5,6,4] 和 k = 2
 *  p 3  ai 2   i 2  2 3 1 5 
 *  2 3 1 5
 * 2 1 3 5 
 * 
输出: 5
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
 */
var findKthLargest = function (nums, k) {
  let povit = nums[0];
  let tmp = nums[0];
  for (let i = 1, len = nums.length; i < len; i++) {
    if (povit > nums[i]) {
      tmp = povit;
      povit = nums[i];
      nums[i] = tmp;
    }
  }
  console.log(nums)
};
console.log("findKthLargest");
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
