/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 * 输入：arr = [3,8,-10,23,19,-4,-14,27]
   输出：[[-14,-10],[19,23],[23,27]]
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let min = Infinity;
    let res = [];
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < min) {
            min = diff;
            res = [[arr[i - 1], arr[i]]];
        } else if (diff === min) {
            res.push([arr[i - 1], arr[i]]);
        }
    }
    return res;
};
// @lc code=end

