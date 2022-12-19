/*
 * @lc app=leetcode.cn id=1971 lang=javascript
 *
 * [1971] 寻找图中是否存在路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // graph 记录能到达的节点
    const graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    // bfs
    const visited = new Set();
    const queue = [source];
    while (queue.length) {
        const cur = queue.shift();
        if (cur === destination) return true;
        if (visited.has(cur)) continue;
        visited.add(cur);
        const nexts = graph.get(cur);
        for (let i = 0; i < nexts.length; i++) {
            queue.push(nexts[i]);
        }
    }
    return false;
};
// @lc code=end

