/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let n = matrix.length;
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; ++i) {
        dp[0][i] = matrix[0][i];
    }
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
        let left = j - 1 >= 0 ? dp[i - 1][j - 1] : Infinity;
        let right = j + 1 < n ? dp[i - 1][j + 1] : Infinity;
        dp[i][j] = Math.min(dp[i - 1][j], left, right) + matrix[i][j];
        }
    }
    let minTotal = dp[n - 1][0];
    for (let i = 1; i < n; ++i) {
        minTotal = Math.min(minTotal, dp[n - 1][i]);
    }
    return minTotal;
};
// @lc code=end

