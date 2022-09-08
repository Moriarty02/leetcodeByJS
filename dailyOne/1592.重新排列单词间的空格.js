/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaceCount = 0;
    let wordCount = 0;
    let words = [];
    let word = '';
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (c == ' ') {
            spaceCount++;
            if (word != '') {
                words.push(word);
                word = '';
                wordCount++;
            }
        } else {
            word += c;
        }
        if (i == text.length - 1 && word != '') {
            words.push(word);
            wordCount++;
        }

    }
    let space = wordCount == 1 ? spaceCount : Math.floor(spaceCount / (wordCount - 1));
    let res = words.join(' '.repeat(space));
    res += ' '.repeat(spaceCount - space * (wordCount - 1));
    return res;
};
// @lc code=end

