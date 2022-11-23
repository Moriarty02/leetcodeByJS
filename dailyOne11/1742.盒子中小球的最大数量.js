/*
 * @lc app=leetcode.cn id=1742 lang=javascript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let map = new Map();
    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }
    let max = 0;
    for (let [key, value] of map) {
        max = Math.max(max, value);
    }
    return max;
};
// @lc code=end

