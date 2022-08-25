/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    let bulls = 0;
    const cntS = new Array(10).fill(0);
    const cntG = new Array(10).fill(0);
    for (let i = 0; i < secret.length; ++i) {
        if (secret[i] == guess[i]) {
            ++bulls;
        } else {
            ++cntS[secret[i].charCodeAt() - '0'.charCodeAt()];
            ++cntG[guess[i].charCodeAt() - '0'.charCodeAt()];
        }
    }
    let cows = 0;
    for (let i = 0; i < 10; ++i) {
        cows += Math.min(cntS[i], cntG[i]);
    }
    return '' + bulls + "A" + '' + cows + "B";
};
// @lc code=end

