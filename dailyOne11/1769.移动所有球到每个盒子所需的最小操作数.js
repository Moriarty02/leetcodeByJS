/*
 * @lc app=leetcode.cn id=1769 lang=javascript
 *
 * [1769] 移动所有球到每个盒子所需的最小操作数
 */

// @lc code=start
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let res = []
    for (let i = 0; i < boxes.length; i++) {
        let count = 0
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j] === '1') {
                count += Math.abs(i - j)
            }
        }
        res.push(count)
    }
    return res
};
// @lc code=end

