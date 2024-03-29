/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  //   let dp = new Array(n + 1);
  //   dp[0] = dp[1] = 0;
  //   for (let i = 2; i <= n; i++) {
  //     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  //   }
  //   return dp[n];
  // 滚动计算
  let prev = 0,
    cur = 0;
  for (let i = 2; i <= n; i++) {
    let next = Math.min(cur + cost[i - 1], prev + cost[i - 2]);
    prev = cur;
    cur = next;
  }
  return cur;
};
// @lc code=end
