/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  if (!matrix[0] || matrix[0].length === 0) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let row = 0,
    column = n - 1;
  while (row < m && column >= 0) {
    if (matrix[row][column] === target) return true;
    if (matrix[row][column] > target) {
      column--;
    } else {
      row++;
    }
  }
  return false;
};
// let test = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];
// console.log(searchMatrix(test, 19));
// @lc code=end
