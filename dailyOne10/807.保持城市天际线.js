/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let rowMax = [], colMax = [];
    for (let i = 0; i < grid.length; i++) {
        rowMax[i] = Math.max(...grid[i]);
        for (let j = 0; j < grid[i].length; j++) {
            colMax[j] = Math.max(colMax[j] || 0, grid[i][j]);
        }
    }
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            res += Math.min(rowMax[i], colMax[j]) - grid[i][j];
        }
    }
    return res;
};
// @lc code=end

