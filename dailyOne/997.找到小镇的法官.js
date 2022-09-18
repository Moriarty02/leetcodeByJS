/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
   let inDu = Array.from({ length: n + 1 }, () => 0);
    let out = Array.from({ length: n + 1 }, () => 0);
    for (let i = 0; i < trust.length; i++) {
        let [a, b] = trust[i];
        out[a]++;
        inDu[b]++;
    }
    for (let i = 1; i <= n; i++) {
        if (inDu[i] === n - 1 && out[i] === 0) {
            return i;
        }
    }
    
    return -1;

};
// @lc code=end

