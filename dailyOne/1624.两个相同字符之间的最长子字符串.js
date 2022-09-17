/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        let index = s.lastIndexOf(s[i]);
        if (index > i) {
        max = Math.max(max, index - i - 1);
        }
    }
    return max;
};
// @lc code=end

