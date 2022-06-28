/**
 * @param {number} n
 * @return {string[]}
 * 
 * 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
answer[i] == "Fizz" 如果 i 是 3 的倍数。
answer[i] == "Buzz" 如果 i 是 5 的倍数。
answer[i] == i （以字符串形式）如果上述条件全不满足。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/fizz-buzz
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
import { log } from "./log.js";
var fizzBuzz = function (n) {
  let ret = [];
  let i = 0;
  while (i++ < n) {
    if (i % 3 === 0 && i % 5 === 0) {
      ret.push("FizzBuzz");
    } else if (i % 3 === 0) {
      ret.push("Fizz");
    } else if (i % 5 === 0) {
      ret.push("Buzz");
    } else {
      ret.push(""+i);
    }
  }
  return ret;
};
let inputs = [15];
// log(inputs, fizzBuzz);
// let ret = inputs.map((input) => canConstruct(input[0], input[1]));
// console.log(ret);
