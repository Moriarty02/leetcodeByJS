/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let nRow = grid.length;
  if (!nRow) return 0;
  let nCol = grid[0].length;
  let count = 0;
  for (let row = 0; row < nRow; ++row) {
    for (let col = 0; col < nCol; ++col) {
      if (grid[row][col] === "1") {
        ++count;
        helper(grid, row, col);
      }
    }
  }
  return count;
};
var helper = (grid, row, col) => {
  let nRow = grid.length;
  let nCol = grid[0].length;
  grid[row][col] = "0";
  if (row - 1 >= 0 && grid[row - 1][col] === "1") helper(grid, row - 1, col);
  if (row + 1 < nRow && grid[row + 1][col] === "1") helper(grid, row + 1, col);
  if (col - 1 >= 0 && grid[row][col - 1] === "1") helper(grid, row, col - 1);
  if (col + 1 < nCol && grid[row][col + 1] === "1") helper(grid, row, col + 1);
};
// @lc code=end
