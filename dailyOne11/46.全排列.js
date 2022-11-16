/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 输入：nums = [1,2,3]
   输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
var permute = function (nums) {
  let res = [];
  /**
   *  深度搜索来做这个
   * 从一个点切入 然后去遍历剩下的点  就像深度搜索一样 一直往下查找
   * 结束条件: path 长度为 nums 的长度
   * path:用于记录当前走过的路线 也就是深度搜索的一条到达叶子节点的路线
   * 最后path 就是要返回的一项
   * used 用于记录已经访问过的节点 1->2->3 1->3->2
   * 
   * @param {*} path 
   * @param {*} used 
   * @returns 
   */
  let dfs = (path, used) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 如果used 就跳过 因为这个 for 是从头到尾的 所以会扫过已经访问过的 数字 比如从1 进来 又去访问 1 2 3 但是1 就应该跳过了
      // used 一定是个数组，因为一条路需要记录多个节点
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      dfs(path, used);
      // 回溯核心 这里也是利用了函数调用是个栈的属性 进入dfs 以后相当于又打开了 for(1->3) 这个时候做回溯就需要回头
      // 也就是 从1 开始然后1->2->3 这个时候就得回头 1->3 然后1->3->2 然后 回到1 重新选择2->1->3 ==> 2->3->1
      // 把之前使用过的数字重置，并且吧 path 也重置了
      used[i] = false;
      path.pop();
    }
  };
  dfs([], []);
  return res;
};

// @lc code=end
