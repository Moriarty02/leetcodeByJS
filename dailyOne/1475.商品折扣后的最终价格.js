/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */

var finalPrices = function(prices) {
 // [10 1 1 6]=>[9 0 0 6]
    let ret = [];
    for(let i =0;i<prices.length;i++){
        let j = i+1;
        while(j<prices.length){
            if(prices[i]>=prices[j]){
                ret.push(prices[i]-prices[j]);
                break;
            }
            j++;
        }
        if(j==prices.length){
            ret.push(prices[i]);
        }
    }
    return ret
};
// @lc code=end

