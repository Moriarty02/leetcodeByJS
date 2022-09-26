/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }
  return Array.from(map)
    .sort((a, b) => a[1] - b[1] || b[0] - a[0])
    .reduce((pre, cur) => {
      let arr = new Array(cur[1]).fill(cur[0]);
      return pre.concat(arr);
    }, []);
};
// @lc code=end
