/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
   let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    return quickMul(x, N);

};
var quickMul = function(x, n) {
    if (n === 0) {
        return 1.0;
    }
    let y = quickMul(x, Math.floor(n / 2));
    return n % 2 === 0 ? y * y : y * y * x;
}
// @lc code=end

