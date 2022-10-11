/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 * 输入：nums = [1,2,3]
   输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let dfs = (start, path) => {
    res.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };
  dfs(0, []);
  return res;
};
// @lc code=end
