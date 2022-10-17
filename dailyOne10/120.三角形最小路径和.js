/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
*     2
     3 4
    6 5 7
   4 1 8 3

  2 + 3 + 5 + 1 = 11
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length;
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < n; ++i) {
    // 左侧的第一个元素 只能由上一行的第一个元素和自己相加得到
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    // j<i 保证了不会越界
    for (let j = 1; j < i; ++j) {
      // 递推公式: dp[i][j] = min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j]
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
    // 右侧的最后一个元素 只能由上一行的最后一个元素和自己相加得到
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }
  let minTotal = dp[n - 1][0];
  for (let i = 1; i < n; ++i) {
    minTotal = Math.min(minTotal, dp[n - 1][i]);
  }
  return minTotal;
};
// @lc code=end
