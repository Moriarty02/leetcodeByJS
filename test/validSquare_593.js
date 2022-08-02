/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

 var validSquare = function(p1, p2, p3, p4) {
    let points = [p1, p2, p3, p4];
    let len = points.length;
    let map = new Map();
    let sum = 0;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        let key = points[i].join(',') + '-' + points[j].join(',');
        let value = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
        map.set(key, value);
        sum += value;
      }
    }
    if (sum === 0) {
      return false;
    }
    let set = new Set();
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        let key = points[i].join(',') + '-' + points[j].join(',');
        let value = map.get(key);
        if (set.has(value)) {
          return false;
        }
        set.add(value);
      }
    }
    return true;
  }
  

// @lc code=end

