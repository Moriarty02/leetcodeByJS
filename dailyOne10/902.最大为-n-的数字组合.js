/*
 * @lc app=leetcode.cn id=902 lang=javascript
 *
 * [902] 最大为 N 的数字组合
 *  输入：digits = ["1","3","5","7"], n = 100
    输出：20
    解释：
    可写出的 20 个数字是：
    1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
 */

// @lc code=start
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
 var atMostNGivenDigitSet = function(digits, n) {
    const s = '' + n;
    const m = digits.length, k = s.length;
    const dp = new Array(k + 1).fill(0).map(() => new Array(2).fill(0));
    dp[0][1] = 1;
    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < m; j++) {
            if (digits[j][0] === s[i - 1]) {
                dp[i][1] = dp[i - 1][1];
            } else if (digits[j][0] < s[i - 1]) {
                dp[i][0] += dp[i - 1][1];
            } else {
                break;
            }
        }
        if (i > 1) {
            dp[i][0] += m + dp[i - 1][0] * m;
        }
    }
    return dp[k][0] + dp[k][1];
};
// @lc code=end

