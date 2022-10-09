/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let dfs = (path, used) => {
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path, used);
      // 递归之后状态重置 回溯
      used[i] = false;
      path.pop();
    }
  };
  dfs([], []);
  return res;
};
// @lc code=end
