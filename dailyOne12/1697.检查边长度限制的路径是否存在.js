/*
 * @lc app=leetcode.cn id=1697 lang=javascript
 *
 * [1697] 检查边长度限制的路径是否存在
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    edgeList.sort((a, b) => a[2] - b[2]);
    const index = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        index[i] = i;
    }
    index.sort((a, b) => queries[a][2] - queries[b][2]);

    const uf = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        uf[i] = i;
    }
    const res = new Array(queries.length).fill(0);
    let k = 0;
    for (let i of index) {
        while (k < edgeList.length && edgeList[k][2] < queries[i][2]) {
            merge(uf, edgeList[k][0], edgeList[k][1]);
            k++;
        }
        res[i] = find(uf, queries[i][0]) == find(uf, queries[i][1]);
    }
    return res;
}

const find = (uf, x) => {
    if (uf[x] === x) {
        return x;
    }
    return uf[x] = find(uf, uf[x]);
}

const merge = (uf, x, y) => {
    x = find(uf, x);
    y = find(uf, y);
    uf[y] = x;
};
// @lc code=end

