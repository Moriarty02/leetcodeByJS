/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let map = new Map();
    //  map记录 key: 起始点 v: 起始点到-结束点 线段
    for (let i = 0; i < pieces.length; i++) {
        map.set(pieces[i][0], pieces[i]);
    }
    let i = 0;
    //  遍历arr 
    while (i < arr.length) {
        // 当前起始点的线段 如果不存在即为 arr 有元素不在 pieces 中 最后肯定不匹配
        let piece = map.get(arr[i]);
        if (!piece) return false;
        // 遍历线段 如果匹配就 i ++ 不匹配就拼不出来
        for (let j = 0; j < piece.length; j++) {
            if (piece[j] !== arr[i]) return false;
            i++;
        }
    }
    return true;
};
// @lc code=end

