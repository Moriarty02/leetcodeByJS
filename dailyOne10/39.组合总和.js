/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let dfs = (index, sum, arr) => {
    if (sum > target) return;
    if (sum === target) {
      res.push(arr);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      dfs(i, sum + candidates[i], [...arr, candidates[i]]);
    }
  };
  dfs(0, 0, []);
  return res;
};
// @lc code=end
