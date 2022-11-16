/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * 输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
输出：2
 */
var countConsistentStrings = function(allowed, words) {
    let count =0;
    let set= new Set();
    for(let i=0;i<allowed.length;i++){
        set.add(allowed[i]);
    }
    for(let i=0;i<words.length;i++){
        let flag = true;
        for(let j=0;j<words[i].length;j++){
            if(!set.has(words[i][j])){
                flag = false;
                break;
            }
        }
        if(flag){
            count++;
        }
    }
    return count;
};
// @lc code=end

