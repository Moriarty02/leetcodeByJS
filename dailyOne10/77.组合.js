/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *  
 * [77] 组合
 *  输入：n = 4, k = 2
    输出：
    [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
    ]
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    let dfs = (start,path) => {
        if(path.length === k){
            ans.push(path.slice());
            return;
        }
        // [1,3]和[3,1]是一样的，所以从start开始
        // i 可以为4 但是 4+1 > 4 
        for(let i = start; i <= n; i++){
            path.push(i);
            dfs(i+1,path);
            path.pop();
        }
    }
    dfs(1,[]);
    return ans;
};
// @lc code=end

