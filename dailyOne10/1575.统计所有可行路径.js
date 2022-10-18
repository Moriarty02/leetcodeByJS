/*
 * @lc app=leetcode.cn id=1575 lang=javascript
 *
 * [1575] 统计所有可行路径
 */

// @lc code=start
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    let n = locations.length;
    let dp = new Array(n).fill(0).map(() => new Array(fuel + 1).fill(0));
    dp[start][0] = 1;
    let ans = 0;
    for (let i = 1; i <= fuel; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (j == k) continue;
                let dis = Math.abs(locations[j] - locations[k]);
                if (dis <= i) {
                    dp[j][i] += dp[k][i - dis];
                    dp[j][i] %= 1000000007;
                }
            }
        }
    }
    for (let i = 0; i <= fuel; i++) {
        ans += dp[finish][i];
        ans %= 1000000007;
    }
    return ans;
};
// @lc code=end

