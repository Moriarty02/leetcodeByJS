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
  /**
   *  整体思路：
   * 1. 找到第一个岛屿，将其标记为2
   * 以这个点位起点，向四个方向做深度搜索做扩散，将其标记为2，放到一个队列里面
   * 2. 从队列里面取出一个点，向四个方向做深度搜索，如果遇到1，返回当前的步数
   * 说白了就是一圈一圈的往外扩散，直到遇到另外一个1
   */
  let coordinates = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let result = 0;
  let findIsland = false; // 只要找到2个岛屿中其中的1个岛屿，就将其设置为true，并结束步骤1中的两层for循环
  let edges = [];
  let markIsland = (row, column) => {
    // 2 代表已经访问过的岛屿
    if (!isLegal(row, column) || grid[row][column] == 2) return;
    if (grid[row][column] == 0) {// 如果是0，就是岛屿的边界部分，这个时候需要向外扩散，将其标记为2，并放到队列里面，后面做深度搜索
      grid[row][column] = 2; // 将边界向外扩展1层岛屿（val=2)
      edges.push([row, column]);
      // 找到边界，当前就不要往外扩散了，边界都放在队列里面了，后面会做深度搜索
      return;
    }
    // 如果是1，就是岛屿的内部部分，这个时候需要将其标记为2，并继续向四个方向做深度搜索
    grid[row][column] = 2; // 为岛屿打标记（val=2）
    for (let c of coordinates) markIsland(row + c[0], column + c[1]); // 深度遍历某个格子的四个方向
  };

  let isLegal = (row, column) => {
    // 判断是否越界
    return (
      row >= 0 && row < grid.length && column >= 0 && column < grid[0].length
    );
  };
  /** 步骤1：为其中一个岛屿打标记（val=2），并保存”边界格子“到edges中 */
  for (let i = 0; !findIsland && i < grid.length; i++) {
    for (let j = 0; !findIsland && j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        // 找到第一个岛屿 从这个点开始做深度搜索
        markIsland(i, j);
        findIsland = true;
      }
    }
  }

  /** 步骤2：利用边界edges，一层一层扩展岛屿（val=2），直到遇到另一个岛屿（val=1）*/
  while (edges.length > 0) {
    result++; // 扩展层数
    let num = edges.length;
    for (let i = 0; i < num; i++) {
      // 这不是深度搜索，而是广度搜索，因为是一层一层的扩展
      let edge = edges.shift();
      for (let c of coordinates) {
        // 向edge的四个方向查看格子编号，并扩展岛屿边界
        let nex = edge[0] + c[0],
          ney = edge[1] + c[1];
        if (isLegal(nex, ney) && grid[nex][ney] == 0) {
          edges.push([nex, ney]); // 添加新的边界
          grid[nex][ney] = 2;
        } else if (isLegal(nex, ney) && grid[nex][ney] == 1) return result; // 与另一个岛屿相遇，则直接返回result
      }
    }
  }

  return result;
};

// let ret = shortestBridge([
//   [0, 1, 0],
//   [0, 0, 0],
//   [0, 0, 1],
// ]);
// console.log(ret);
// @lc code=end
