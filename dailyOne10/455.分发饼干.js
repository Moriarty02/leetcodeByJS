/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let child =0;
    let cookie = 0;
    while(child < g.length && cookie < s.length){
        if(g[child] <= s[cookie]){
            child++;
        }
        cookie++;
    }
    return child;
};
// @lc code=end

