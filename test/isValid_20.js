/**
 * @param {string} s
 * @return {boolean}
 */
/****
 * 输入：s = "()[]{}"
输出：true
 */
var isValid_1 = function (s) {
  let a = ["(", ")"];
  let b = ["{", "}"];
  let c = ["[", "]"];
  let stack = [];
  let sArr = s.split("");
  if (sArr.length % 2 !== 0) {
    return false;
  }
  if (sArr.length === 0) {
    return true;
  }
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === a[1] && stack[stack.length - 1] === a[0]) {
      stack.pop();
    } else if (sArr[i] === b[1] && stack[stack.length - 1] === b[0]) {
      stack.pop();
    } else if (sArr[i] === c[1] && stack[stack.length - 1] === c[0]) {
      stack.pop();
    } else {
      stack.push(sArr[i]);
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

// 这个解法妙啊   效率好低 哈哈哈  频繁修改字符串导致的效率低
let isValid_2 = function (s) {
  while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
    s = s.replace("{}", "");
    s = s.replace("[]", "");
    s = s.replace("()", "");
  }
  return s == "";
};
let s = "{[]}";
console.log("isValid(s)");
console.log(isValid(s));
