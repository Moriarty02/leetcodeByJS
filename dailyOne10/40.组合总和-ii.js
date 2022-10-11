/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);
  let dfs = (index, sum, arr) => {
    if (sum > target) return;
    if (sum === target) {
      res.push(arr);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      // 排序过后 如果当前值和前一个值相等，前一个已经使用过了，当前值就不用再使用了
      // i>index 保证了第一个值不会被跳过
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      dfs(i + 1, sum + candidates[i], [...arr, candidates[i]]);
    }
  };
  dfs(0, 0, []);
  return res;
};
// @lc code=end
