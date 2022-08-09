/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res =[]
    let len = nums.length
    if(len<3||nums===null) return res
    nums.sort((a,b)=>a-b)
    for(let i=0;i<len-2;i++){
        if(nums[i]>0) break// 排序后 i 为最小的 如果 a i >0 则后面和大于0
        if(i>0&&nums[i]===nums[i-1]) continue // 相同后移
        /**
         *  三数之和简化为两数之和
         * 既 当前 nums[i] left  right
         *  left 取i+1
         *  right 从后向前找 从 len-1 开始找
         * 
         */
        let left = i+1 
        let right = len-1
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]
            if(sum===0){
                res.push([nums[i],nums[left],nums[right]])
                // 去重
                while(left<right&&nums[left]===nums[left+1]) left++
                while(left<right&&nums[right]===nums[right-1]) right--
                left++
                right--
            }else if(sum<0){
                // 偏小后移
                left++
            }else{
             // 和大于0 偏大 right 前移
                right--
            }
        }
    }
    return res
};
// @lc code=end

