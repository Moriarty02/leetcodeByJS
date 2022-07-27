/**
 * @param {number} n
 * @return {string[][]}
 */
/*****
 *  输入：4
 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 解释: 4 皇后问题存在如下两个不同的解法。
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/eight-queens-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { log } from "./log.js";
var solveNQueens = function (n) {
  let res = [];
  let queen = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let columns = new Set();
  let diagonals = new Set();
  let antiDiagonals = new Set();
  backTrack(res, queen, n, 0, columns, diagonals, antiDiagonals);
  return res;
};
var backTrack = function (
  res,
  queen,
  n,
  row,
  columns,
  diagonals,
  antiDiagonals
) {
  if (row === n) {
    res.push(generate(n,queen));
    return;
  } else {
    for (let i = 0; i < n; i++) {
      if (columns.has(i)) continue;
      let diagonal1 = row - i;
      if (diagonals.has(diagonal1)) continue;
      let diagonal2 = row + i;
      if (antiDiagonals.has(diagonal2)) continue;
      queen[row] = i;
      columns.add(i);
      diagonals.add(diagonal1);
      antiDiagonals.add(diagonal2);
      backTrack(res, queen, n, row + 1, columns, diagonals, antiDiagonals);
      columns.delete(i);
      diagonals.delete(diagonal1);
      antiDiagonals.delete(diagonal2);
    }
  }
};
var generate = function (n, queens) {
  let board = [];
  for (let i = 0; i < n; i++) {
    let row = new Array(n).fill('.');
    row[queens[i]] = "Q";
    board.push(row.join(''));
  }
  return board;
};

// log(solveNQueens, 5);
