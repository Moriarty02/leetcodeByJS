/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let dfs = (start, path) => {
    res.push(path.slice());
    for (let i = start; i < nums.length; i++) {
        // 跟前面几道回溯的题目一样，排序过后相同的就剪枝
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };
    dfs(0, []);
  return res;
};
// @lc code=end
