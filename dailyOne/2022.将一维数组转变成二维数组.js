/*
 * @lc app=leetcode.cn id=2022 lang=javascript
 *
 * [2022] 将一维数组转变成二维数组
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 * [1,2,3,4] m =2 n=2 [[1,2],[3,4]]
 */
var construct2DArray = function (original, m, n) {
    if (original.length !== m * n) return [];
    let res = [];
    for (let i = 0; i < m; i++) {
        res.push(original.slice(i * n, (i + 1) * n));
    }
    return res;
};
// @lc code=end
