/*
 * @lc app=leetcode.cn id=667 lang=javascript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let res = [];
    let i = 1, j = n;
    while (i <= j) {
        if (k > 1) {
            res.push(k-- % 2 ? i++ : j--);
        } else {
            res.push(i++);
        }
    }
    return res;
};
// @lc code=end

