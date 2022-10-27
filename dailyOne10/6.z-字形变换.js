/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    let arr = new Array(numRows).fill('')
    let i = 0, flag = -1
    for (let c of s) {
        arr[i] += c
        // 到达顶部或者底部时，改变方向
        if (i === 0 || i === numRows - 1) flag = -flag
        i += flag
    }
    return arr.join('')
};
// @lc code=end

