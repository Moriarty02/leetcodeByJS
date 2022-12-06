/*
 * @lc app=leetcode.cn id=1796 lang=javascript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let arr = s.match(/\d/g);
    if (!arr) return -1;
    arr = [...new Set(arr)].sort((a, b) => b - a);
    return arr[1] ? arr[1] : -1;
};
// @lc code=end

