/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if (n === 1) return 0
    let mid = 2 ** (n - 2)
    if (k <= mid) return kthGrammar(n - 1, k)
    return kthGrammar(n - 1, k - mid) ^ 1
};
// @lc code=end

