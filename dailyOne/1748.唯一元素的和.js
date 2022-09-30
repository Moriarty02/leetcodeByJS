/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * [1,2,3,2]=>[1,3]=>4
 */
var sumOfUnique = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.keys(map).reduce((pre, cur) => {
    if (map[cur] === 1) {
      return pre + Number(cur);
    } else {
      return pre;
    }
  }, 0);
};

// @lc code=end
