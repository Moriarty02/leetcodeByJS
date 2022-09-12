/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let i = 1;
    while(i <= nums.length){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] >= i){
                count++;
            }
        }
        if(count === i){
            return i;
        }
        i++;
    }
    return -1;
};
// @lc code=end

