/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    if(arr.length===0) return 0;
    let stack = [];
    let res = 0;
    let mod = 1e9+7;
    for(let i=0;i<arr.length;i++){
        while(stack.length>0&&arr[stack[stack.length-1]]>arr[i]){
            let top = stack.pop();
            let left = stack.length===0?-1:stack[stack.length-1];
            res = (res+(i-top)*(top-left)*arr[top])%mod;
        }
        stack.push(i);
    }
    while(stack.length>0){
        let top = stack.pop();
        let left = stack.length===0?-1:stack[stack.length-1];
        res = (res+(arr.length-top)*(top-left)*arr[top])%mod;
    }
    return res;
};
// @lc code=end

