/*
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。
输入: nums = [0,1,0,3,12] 
输出: [1,3,12,0,0]

[0,0,1];
*/
var moveZeroes = function (nums) {

  if (nums === null || nums.length === 0) return;
  let index = 0;// 记录着为0 的次数
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }
  while (index < len) {
    nums[index++] = 0;
    
  }
};
// let nums1 = [0, 0, 1];
// let nums2 = [0,1,0,3,12] 
// moveZeroes(nums1);
// moveZeroes(nums2);

// console.log(nums1);
// console.log(nums2);

