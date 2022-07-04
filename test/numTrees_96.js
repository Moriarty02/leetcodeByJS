/**
 * @param {number} n
 * @return {number}
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 * 
 * 用 i 个节点构建 BSTBST，除去根节点，剩 i-1 个节点构建左、右子树，左子树分配 00 个，则右子树分配到 i−i−1 个……以此类推。
 */
import {log} from "./log.js"
const numTrees = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
};


// log(numTrees,3)

