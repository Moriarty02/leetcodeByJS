/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 到达终点数字
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    let count = 0;
    let sum = 0;
    target = Math.abs(target);
    while(sum < target){
        count++;
        sum += count;
    }
    while((sum - target) % 2 != 0){
        count++;
        sum += count;
    }
    return count;
};
console.log(reachNumber(3));
console.log(reachNumber(4))
console.log(reachNumber(5))
console.log(reachNumber(11))



// @lc code=end

