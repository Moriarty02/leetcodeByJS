/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 递推公式：
  if (prices.length <= 1) return 0;
  let min = prices[0],
    max = 0;
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return max;
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(`maxProfit`);
console.log(maxProfit(prices));
