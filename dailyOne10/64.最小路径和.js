/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
   输出：7
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = grid[i][j];
      } else {
        // 递推公式: dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
        let top = i - 1 >= 0 ? dp[i - 1][j] : Infinity;
        let left = j - 1 >= 0 ? dp[i][j - 1] : Infinity;
        dp[i][j] = Math.min(top, left) + grid[i][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end
