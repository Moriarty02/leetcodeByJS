/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = Array.from({ length: rooms.length }, () => false);
    dfs(rooms, visited, 0);
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) return false;
    }
    return true;
};
var dfs = function(rooms, visited, index) {
    if (visited[index]) return;
    visited[index] = true;
    for (let i = 0; i < rooms[index].length; i++) {
        dfs(rooms, visited, rooms[index][i]);
    }
}

// @lc code=end

