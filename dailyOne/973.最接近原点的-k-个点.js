/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
   let arr = [];
    for (let i = 0; i < points.length; i++) {
        let [x, y] = points[i];
        arr.push([x * x + y * y, i]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(points[arr[i][1]]);
    }
    return res;
};

// @lc code=end

