/*
 * @lc app=leetcode.cn id=1619 lang=javascript
 *
 * [1619] 删除某些元素后的数组均值
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=>a-b)
    let n = arr.length
    let k = Math.floor(n/20)
    let sum = 0
    for(let i=k;i<n-k;i++){
        sum+=arr[i]
    }
    return sum/(n-2*k)
};
// @lc code=end

