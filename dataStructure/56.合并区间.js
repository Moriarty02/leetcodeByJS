/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let len = intervals.length;
    if(len<2) return intervals;
    intervals.sort((a,b)=>a[0]-b[0]);
    let res = [intervals[0]];
    for(let i=1;i<len;i++){
        let [start,end] = res[res.length-1];
        if(intervals[i][0]>end){
            res.push(intervals[i]);
        }else{
            res[res.length-1][1] = Math.max(intervals[i][1],end);
        }
    }
    return res;
};
// @lc code=end

