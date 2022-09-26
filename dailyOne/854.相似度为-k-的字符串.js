/*
 * @lc app=leetcode.cn id=854 lang=javascript
 *
 * [854] 相似度为 K 的字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function (s1, s2) {
  const n = s1.length;
  const queue = [];
  const visited = new Set();
  queue.push([s1, 0]);
  visited.add(s1);
  let step = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [s, idx] = queue.shift();
      if (s === s2) return step;
      let j = idx;
      while (s[j] === s2[j]) j++;
      for (let k = j + 1; k < n; k++) {
        // s[k] === s2[k] 当前位置已经匹配，不需要交换
        // s[k] !== s2[j]  我们找的是 s2中和 s[j]相同的字符，所以这里要排除
        if (s[k] === s2[k] || s[k] !== s2[j]) continue;
        const newS = swap(s, j, k);
        if (!visited.has(newS)) {
          queue.push([newS, j + 1]);
          visited.add(newS);
        }
      }
    }
    step++;
  }
  return step;
};
const swap = (s, i, j) => {
  const arr = s.split("");
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
};
// @lc code=end
