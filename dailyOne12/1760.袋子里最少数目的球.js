/*
 * @lc app=leetcode.cn id=1760 lang=javascript
 *
 * [1760] 袋子里最少数目的球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1;
    let right = Math.max(...nums);
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            count += Math.ceil(nums[i] / mid) - 1;
        }
        if (count > maxOperations) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};
// @lc code=end

