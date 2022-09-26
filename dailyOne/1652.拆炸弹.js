/*
 * @lc app=leetcode.cn id=1652 lang=javascript
 *
 * [1652] 拆炸弹
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
    let res = new Array(n).fill(0);
    if(k === 0) return res;
    let sum = new Array(n*2+10).fill(0);
    for(let i = 1; i <= n*2; i++) {
        sum[i] = sum[i-1] + code[(i-1)%n];
    }
    for(let i = 1; i <= n; i++) {
        if(k > 0) {
            res[i-1] = sum[i+k] - sum[i];
        } else {
            res[i-1] = sum[i+n-1] - sum[i+n+k-1];
        }
    }


    return res;
}
// @lc code=end

