/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }
  let result = [];
  let temp = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      temp.push(mat[i][j]);
      if (temp.length === c) {
        result.push(temp);
        temp = [];
      }
    }
  }
  return result;
};
// @lc code=end

