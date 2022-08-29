/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stackS = [];
    let stackT = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            stackS.pop();
        } else {
            stackS.push(s[i]);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            stackT.pop();
        } else {
            stackT.push(t[i]);
        }
    }
    return stackS.join('') === stackT.join('');
};
// @lc code=end

