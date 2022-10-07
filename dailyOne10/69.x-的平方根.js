/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    let left = 1;
    let right = x;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid > x) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left * left > x ? left - 1 : left;
};
// @lc code=end

