/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    let l = 0, r = 10 ** 15;
    let lcm = a * b / gcd(a, b);
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        let cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm);
        if (cnt < n) l = mid + 1;
        else r = mid;
    }
    return l % (10 ** 9 + 7);
};
var gcd = function (a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// @lc code=end

