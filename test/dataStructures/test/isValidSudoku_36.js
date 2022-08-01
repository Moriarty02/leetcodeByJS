/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = new Array(9).fill().map(() => new Array(9).fill(0));
  let cols = new Array(9).fill().map(() => new Array(9).fill(0));
  const subboxes = new Array(9)
    .fill()
    .map(() => new Array(9).fill().map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        let num = parseInt(board[i][j]) - 1;
        rows[i][num]++;
        cols[j][num]++;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][num]++;
        if (
          rows[i][num] > 1 ||
          cols[j][num] > 1 ||
          subboxes[Math.floor(i / 3)][Math.floor(j / 3)][num] > 1
        ) {
          return false;
        }
      }
    }
  }
  return true;
};
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let board2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// console.log(`isValidSudoku`);
// console.log(isValidSudoku(board));
// console.log(isValidSudoku(board2));
