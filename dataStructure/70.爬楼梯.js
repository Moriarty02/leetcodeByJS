/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = [];
  let i = 1;// 0 没意义  从1开始 所有坐标都-1
  while (i <= n) {
    if (i === 1) {
      memo.push(1);
    } else if (i === 2) {
      memo.push(2);
    } else {
      memo.push(memo[i - 2] + memo[i - 3]);
    }
    i++;
  }
  return memo[n - 1];
};

// @lc code=end
