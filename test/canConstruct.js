/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/ransom-note
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 输入：ransomNote = "a", magazine = "b"
输出：false
输入：ransomNote = "a", magazine = "b"
输出：false
输入：ransomNote = "aa", magazine = "ab"
输出：false
输入：ransomNote = "aa", magazine = "aab"
输出：true
 */
var canConstruct_my = function (ransomNote, magazine) {
  let magazineArray = magazine.split(""); // aab
  let ransomNoteArray = ransomNote.split(""); // aa
  for (let i = 0, len = ransomNoteArray.length; i < len; i++) {
    let char = ransomNoteArray[i];
    let index = magazineArray.indexOf(char);
    if (index === -1) return false;
    magazineArray[index] = null;
  }

  return true;
};

let inputs = [
  ["a", "b"],
  ["aa", "ab"],
  ["aa", "aab"],
];
// let ret = inputs.map((input) => canConstruct(input[0], input[1]));
// console.log(ret);
