/*
 * @lc app=leetcode.cn id=808 lang=javascript
 *
 * [808] 分汤
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n > 4800) return 1;
    let memo = new Map();
    return helper(n, n, memo);
};
var helper = function (a, b, memo) {
    if (a <= 0 && b <= 0) return 0.5;
    if (a <= 0) return 1;
    if (b <= 0) return 0;
    let key = a + ',' + b;
    if (memo.has(key)) return memo.get(key);
    let res = 0.25 * (helper(a - 100, b, memo) + helper(a - 75, b - 25, memo) + helper(a - 50, b - 50, memo) + helper(a - 25, b - 75, memo));
    memo.set(key, res);
    return res;
}
// @lc code=end

