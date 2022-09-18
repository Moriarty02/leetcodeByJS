/*
 * @lc app=leetcode.cn id=1823 lang=javascript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = Array.from({ length: n }, (v, i) => i + 1);
    let index = 0;
    while (arr.length > 1) {
        index = (index + k - 1) % arr.length;
        arr.splice(index, 1);
    }
    return arr[0];
};
// @lc code=end

