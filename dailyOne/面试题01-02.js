/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  let map = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else {
      map.set(s1[i], 1);
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (map.has(s2[i])) {
      map.set(s2[i], map.get(s2[i]) - 1);
    } else {
      return false;
    }
  }
  for (let [key, value] of map) {
    if (value !== 0) return false;
  }
  return true;
};
