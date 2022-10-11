/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 * 1 "123"
   2 "132"
   3 "213"
   4 "231"
   5 "312"
   6 "321"
    输入：n = 3, k = 3
    输出："213"
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function (n, k) {
  let used = new Array(n + 1).fill(false);
  let factorial = [1];

  // 计算阶乘
  var calculateFactorial = function (n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res *= i;
      factorial[i] = res;
    }
  };
  calculateFactorial(n);

  var dfs = function (index, path) {
    if (index === n) {
      return path;
    }
    let count = factorial[n - 1 - index];
    for (let i = 1; i <= n; i++) {
      if (used[i]) {
        continue;
      }
      if (count < k) {
        k -= count;
        continue;
      }
      path.push(i);
      used[i] = true;
      dfs(index + 1, path);
      return;
    }
  };

  let path = [];
  dfs(0, path);
  return path.join("");
};
// @lc code=end
