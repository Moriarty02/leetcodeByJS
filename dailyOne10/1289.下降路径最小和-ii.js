/*
 * @lc app=leetcode.cn id=1289 lang=javascript
 *
 * [1289] 下降路径最小和  II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    let m = grid.length,
        n = grid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    /**
     * 和 931.下降路径最小和.js 的区别在于，这里的 grid 是一个二维数组，而不是一个正方形
     * 所以，我们需要对 dp 数组进行初始化，将第一行的值赋值给 dp 数组
     * 之后，我们就可以按照 931.下降路径最小和.js 的逻辑进行计算了
     * 
     */
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0) {
                dp[i][j] = grid[i][j];
            } else {
                // 一个额外的逻辑 遍历一整行 找到最小值 跳过当前列
                //  递推公式: dp[i][j] = min(dp[i-1][0]...dp[i-1][i-1]) + grid[i][j]
                let min = Infinity;
                for (let k = 0; k < n; k++) {
                    if (k == j) continue;
                    min = Math.min(min, dp[i - 1][k]);
                }
                dp[i][j] = min + grid[i][j];
            }
        }
    }
    let minTotal = dp[m - 1][0];
    for (let i = 1; i < n; i++) {
        minTotal = Math.min(minTotal, dp[m - 1][i]);
    }
    return minTotal;
};
// @lc code=end

