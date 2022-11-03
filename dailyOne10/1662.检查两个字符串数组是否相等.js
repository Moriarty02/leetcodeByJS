/*
 * @lc app=leetcode.cn id=1662 lang=javascript
 *
 * [1662] 检查两个字符串数组是否相等
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let p1=0,p2=0;
    let i=0,j=0;
    while(p1<word1.length&&p2<word2.length){
        if(word1[p1][i]!=word2[p2][j]){
            return false;
        }
        i++;
        j++;
        if(i==word1[p1].length){
            i=0;
            p1++;
        }
        if(j==word2[p2].length){
            j=0;
            p2++;
        }
    }
    if(p1==word1.length&&p2==word2.length){
        return true;
    }
    return false;
};
// @lc code=end

