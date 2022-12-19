/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        str += s[i].charCodeAt() - 96;
    }
    let res = 0;
    for (let i = 0; i < k; i++) {
        res = 0;
        for (let j = 0; j < str.length; j++) {
            res += Number(str[j]);
        }
        str = res + '';
    }
    return res;
};
// @lc code=end

