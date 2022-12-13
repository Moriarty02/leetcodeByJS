/*
 * @lc app=leetcode.cn id=1832 lang=javascript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
 if(sentence.length < 26) return false;
 let set = new Set();
    for(let i = 0; i < sentence.length; i++) {
        set.add(sentence[i]);
    }
    return set.size === 26;
};
// @lc code=end

