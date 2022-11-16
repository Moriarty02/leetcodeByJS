/*
 * @lc app=leetcode.cn id=864 lang=javascript
 *
 * [864] 获取所有钥匙的最短路径
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    let m = grid.length, n = grid[0].length;
    let start = [0, 0];
    let keys = [];
    let doors = [];
    let visited = new Set();
    let queue = [];
    let step = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '@') {
                start = [i, j];
            } else if (grid[i][j] >= 'a' && grid[i][j] <= 'f') {
                keys.push([i, j]);
            } else if (grid[i][j] >= 'A' && grid[i][j] <= 'F') {
                doors.push([i, j]);
            }
        }
    }
    queue.push([start, 0]);
    visited.add(start + '0');
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let [cur, key] = queue.shift();
            if (key === (1 << keys.length) - 1) return step;
            for (let [x, y] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                let [nx, ny] = [cur[0] + x, cur[1] + y];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] === '#') continue;
                let nkey = key;
                if (grid[nx][ny] >= 'a' && grid[nx][ny] <= 'f') {
                    nkey |= 1 << (grid[nx][ny].charCodeAt() - 'a'.charCodeAt());
                }
                if (grid[nx][ny] >= 'A' && grid[nx][ny] <= 'F') {
                    if ((nkey & (1 << (grid[nx][ny].charCodeAt() - 'A'.charCodeAt()))) === 0) continue;
                }
                if (visited.has(nx + '-' + ny + '-' + nkey)) continue;
                visited.add(nx + '-' + ny + '-' + nkey);
                queue.push([[nx, ny], nkey]);
            }
        }
        step++;
    }
    return -1;

};
// @lc code=end

