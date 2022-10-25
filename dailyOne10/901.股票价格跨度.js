/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function () {
  this.stack = [];
  this.res = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let count = 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
        count += this.stack.pop()[1];
    }
    this.stack.push([price, count]);
    return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
