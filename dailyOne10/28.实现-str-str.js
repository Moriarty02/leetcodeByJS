/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 输入：haystack = "sadbutsad", needle = "sad"
    输出：0
    解释："sad" 在下标 0 和 6 处匹配。
    第一个匹配项的下标是 0 ，所以返回 0 。
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    if (haystack === '') return -1
    let i = 0
    let j = 0
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
        i++
        j++
        } else {
        i = i - j + 1
        j = 0
        }
        if (j === needle.length) return i - j
    }
    return -1
};
// @lc code=end

