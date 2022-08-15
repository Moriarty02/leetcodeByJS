/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let ans = "0";
  let m = num1.length,
    n = num2.length;
  for (let i = n - 1; i >= 0; i--) {
    let cur = "";
    let add = 0;
    for (let j = n - 1; j > i; j--) {
      cur += 0;
    }
    let y = num2[i] - "0";
    for (let j = m - 1; j >= 0; j--) {
      let x = num1[j] - "0";
      let product = x * y + add;
      cur += product % 10;
      add = parseInt(product / 10);
    }
    if (add !== 0) {
      cur += add % 10;
    }
    ans = addStrings(ans, cur.split("").reverse().join(""));
  }
  return ans
};
// 415的字符串加法
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let plus = 0;
  let ret = [];
  while (i >= 0 || j >= 0) {
    let a = i >= 0 ? parseInt(num1[i]) : 0;
    let b = j >= 0 ? parseInt(num2[j]) : 0;
    let currentSum = a + b + plus;
    ret.push(currentSum % 10);
    plus = parseInt(currentSum / 10);
    i--;
    j--;
  }
  if (plus === 1) {
    ret.push(1);
  }
  return ret.reverse().join("");
};
// console.log(multiply("12", "12"));
// @lc code=end
