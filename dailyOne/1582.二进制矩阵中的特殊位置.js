/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let m = mat.length, n = mat[0].length;
    let row = new Array(m).fill(0), col = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j]) {
                row[i]++;
                col[j]++;
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] && row[i] == 1 && col[j] == 1) {
                ans++;
            }
        }
    }
    return ans;

};
// @lc code=end

