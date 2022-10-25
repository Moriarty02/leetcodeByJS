/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    // 1. 从左到右遍历，记录当前最大值，如果当前值小于最大值，则记录当前位置
    let leftMax = nums[0];
    let max = nums[0];
    let leftPos = 0;
    for (let i = 1; i < nums.length; i++) {
    //    console.log("before ",leftMax, max, leftPos) 
        if (nums[i] < leftMax) {
            leftMax = max;
            leftPos = i;
        } else {
            // 2. 如果当前值大于最大值，则更新最大值
            max = Math.max(max, nums[i]);
        }
        console.log("end ",leftMax, max, leftPos)
    }
    return leftPos + 1;
};
// @lc code=end

