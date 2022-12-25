/*
 * @lc app=leetcode.cn id=2011 lang=javascript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i]=== '++X' || operations[i] === 'X++') {
        count++;
        } else {
        count--;
        }
    }
    return count;
};
// @lc code=end

