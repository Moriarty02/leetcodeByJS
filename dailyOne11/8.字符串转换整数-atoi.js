/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const max = Math.pow(2, 31) - 1
    const min = -Math.pow(2, 31)
    const num = parseInt(s)
    if (isNaN(num)) return 0
    if (num > max) return max
    if (num < min) return min
    return num
};
// @lc code=end

