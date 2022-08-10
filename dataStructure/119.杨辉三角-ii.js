/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let dp = new Array(rowIndex + 1).fill(0).map(() => []);
  dp[0][0] = 1;
  for (let row = 1; row <= rowIndex; row++) {
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        dp[row][col] = 1;
      } else {
        // 线性 dp 转移方程
        dp[row][col] = dp[row - 1][col - 1] + dp[row - 1][col];
      }
    }
  }
  return dp[rowIndex];
};
// @lc code=end
