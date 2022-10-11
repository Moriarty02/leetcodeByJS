/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const res = []   
  // 相当于用 index 区分不同位置的相同元素
  const used = new Array(nums.length).fill(false);
  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
        // 剪枝 之前排过序了 
        // 判定条件 1. i > 0 保证 i - 1 有意义
        // 判定条件 2. nums[i] === nums[i - 1] 保证和上一个元素相等
        // 判定条件 3. !used[i - 1] 保证上一个元素没有被使用过 如果使用过 则从这个元素开始的分支一定是重复的
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path);
      used[i] = false;
      path.pop();
    }
  };
  dfs([]);
//   console.log(res);
  return Array.from(res);
};
// permuteUnique([1, 1, 2]);
// @lc code=end

