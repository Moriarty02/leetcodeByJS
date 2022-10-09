/*
 * @lc app=leetcode.cn id=1234 lang=javascript
 *
 * [1234] 替换子串得到平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
    let len = s.length
    let target = len / 4
    let map = {"Q": 0, "W": 0, "E": 0, "R": 0}
    for (let i = 0; i < len; i++) {
        map[s[i]] = map[s[i]] + 1
    }
    let left = 0
    let right = 0
    let res = len
    while (right < len) {
        map[s[right]]--
        while (left < len && map['Q'] <= target && map['W'] <= target && map['E'] <= target && map['R'] <= target) {
            res = Math.min(res, right - left + 1)
            map[s[left]]++
            left++
        }
        right++
    }
    return res
};
// @lc code=end

