/*
 * @lc app=leetcode.cn id=1774 lang=javascript
 *
 * [1774] 最接近目标价格的甜点成本
 */

// @lc code=start
/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
    let res = Infinity;
    for (let i = 0; i < baseCosts.length; i++) {
        let base = baseCosts[i];
        dfs(base, 0);
    }
    return res;

    function dfs(base, index) {
        if (Math.abs(base - target) < Math.abs(res - target)) {
            res = base;
        } else if (Math.abs(base - target) === Math.abs(res - target)) {
            res = Math.min(res, base);
        }
        if (index === toppingCosts.length) {
            return;
        }
        for (let i = 0; i < 3; i++) {
            dfs(base + toppingCosts[index] * i, index + 1);
        }
    }
};
// @lc code=end

