/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let temp = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(temp);
  }
  return result;
};
// @lc code=end

let numRows = 5;
console.log(`generate`);
console.log(generate(numRows));
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
