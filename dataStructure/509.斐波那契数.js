/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let memo = [];
  let i = 0;
  while (i <= n) {
    if (i === 0) {
      memo.push(0);
    } else if (i === 1) {
      memo.push(1);
    } else {
      memo.push(memo[i - 1] + memo[i-2]);
    }
    i++
  }
  return memo[n];
};
// @lc code=end
