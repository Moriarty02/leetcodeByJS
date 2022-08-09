/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let halfLen = nums.length / 2;
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 0;
//     }
//     map[nums[i]]++;
//     if (map[nums[i]] >= halfLen) return nums[i];
//   }
//   return null;
// };
// 是个办法  超过半数的数字排序后肯定在中间位置
// Arrays.sort(nums);
// return nums[nums.length / 2];

// 投票法
/*****
 *  众数一定是超过半数的 所以 count 一定为正数
 *  我们维护一个候选众数 candidate 和它出现的次数 count。初始时 candidate 可以为任意值，count 为 0；

我们遍历数组 nums 中的所有元素，对于每个元素 x，在判断 x 之前，如果 count 的值为 0，我们先将 x 的值赋予 candidate，随后我们判断 x：

如果 x 与 candidate 相等，那么计数器 count 的值增加 1；

如果 x 与 candidate 不等，那么计数器 count 的值减少 1。

在遍历完成后，candidate 即为整个数组的众数。
 */
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += nums[i] === candidate ? 1 : -1;
  }
  return candidate
};
// @lc code=end
