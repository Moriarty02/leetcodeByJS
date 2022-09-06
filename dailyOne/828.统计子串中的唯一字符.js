/*
 * @lc app=leetcode.cn id=828 lang=javascript
 *
 * [828] 统计子串中的唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let map = new Map();
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (!map.has(c)) {
            map.set(c, []);
        }
        map.get(c).push(i);
    }
    for (let [key, value] of map) {
        let len = value.length;
        for (let i = 0; i < len; i++) {
            let left = i == 0 ? -1 : value[i - 1];
            let right = i == len - 1 ? s.length : value[i + 1];
            res += (value[i] - left) * (right - value[i]);
        }
    }
    return res;
};
// @lc code=end

