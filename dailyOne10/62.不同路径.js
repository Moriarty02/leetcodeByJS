/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    // 递推公司 dp[i][j] = dp[i-1][j] + dp[i][j-1]
    // 只有两种走的方式 那么从上边下来的就是dp[i-1][j] 从左边过来的就是dp[i][j-1]
    // 结果集为每次走右和走下的结果集之和

    // 初始化 如果只是横着走或者竖着走 那么结果集就是1
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end

