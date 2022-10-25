/*
 * @lc app=leetcode.cn id=934 lang=javascript
 *
 * [934] 最短的桥
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  // 1. 找到第一个岛屿，标记为2
  // 2. 找到第二个岛屿，标记为3
  // 3. 从第二个岛屿开始，向外扩散，找到第一个为2的位置，返回步数
  // 4. 从第一个岛屿开始，向外扩散，找到第一个为3的位置，返回步数
  // 5. 取两个步数的最小值
  let m = grid.length;
  let n = grid[0].length;
  let firstIsland = [];
  let secondIsland = [];
  let foundSecondIsland = false;
  let steps = 0;
  let queue = [];
  let visited = new Set();
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (!foundSecondIsland) {
          // 1. 找到第一个岛屿，标记为2
          dfs(grid, i, j, 2);
          foundSecondIsland = true;
        } else {
          // 2. 找到第二个岛屿，标记为3
          dfs(grid, i, j, 3);
        }
      }
    }
  }
  // 3. 从第二个岛屿开始，向外扩散，找到第一个为2的位置，返回步数
  // 4. 从第一个岛屿开始，向外扩散，找到第一个为3的位置，返回步数
  // 5. 取两个步数的最小值
  return Math.min(bfs(grid, 2), bfs(grid, 3));

  function dfs(grid, i, j, val) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) {
      return;
    }
    grid[i][j] = val;
    dfs(grid, i + 1, j, val);
    dfs(grid, i - 1, j, val);
    dfs(grid, i, j + 1, val);
    dfs(grid, i, j - 1, val);
  }
  function bfs(grid, val) {
    let steps = 0;
    let queue = [];
    let visited = new Set();
    let dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === val) {
          queue.push([i, j]);
          visited.add(`${i},${j}`);
        }
      }
    }
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let [x, y] = queue.shift();
        for (let [dx, dy] of dirs) {
          let nx = x + dx;
          let ny = y + dy;
          if (
            nx < 0 ||
            nx >= m ||
            ny < 0 ||
            ny >= n ||
            visited.has(`${nx},${ny}`)
          ) {
            continue;
          }
          if (grid[nx][ny] === 1) {
            return steps;
          }
          queue.push([nx, ny]);
          visited.add(`${nx},${ny}`);
        }
      }
      steps++;
    }
  }
};
// @lc code=end
