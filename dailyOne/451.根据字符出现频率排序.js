/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let arr = Array.from(map);
    arr.sort((a, b) => b[1] - a[1]);
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res += arr[i][0].repeat(arr[i][1]);
    }
    return res;
};
// @lc code=end

