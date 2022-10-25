/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length
    // dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润
    // dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i]-fee)  前一天没有股票，今天不动；前一天有股票，今天卖出 
    // dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])   前一天有股票，今天不动；前一天没有股票，今天买入
    let dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
    dp[0][0] = 0 // 因为没有股票，所以卖了也没有收益 
    dp[0][1] = -prices[0] // 因为第一天总是持有股票，所以肯定是0-price[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    // 价格遍历玩后，肯定是没有股票的时候利润最大
    return dp[n - 1][0]
};
// @lc code=end

