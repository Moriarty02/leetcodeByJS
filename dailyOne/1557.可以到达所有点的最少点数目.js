/*
 * @lc app=leetcode.cn id=1557 lang=javascript
 *
 * [1557] 可以到达所有点的最少点数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let ans = [];
    let inDu = Array.from({ length: n }, () => 0);
    for (let i = 0; i < edges.length; i++) {
        let [a, b] = edges[i];
        inDu[b]++;
    }
    for (let i = 0; i < n; i++) {
        if (inDu[i] === 0) {
            ans.push(i);
        }
    }
    return ans;
};
// @lc code=end

