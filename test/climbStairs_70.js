var climbStairs = function(n) {
  if(n <= 2) return n;
    let res = 0, n1 = 1, n2 = 2; // n1 表示前 2 项，n2 表示前 1 项
    for(let i = 3; i<= n; i++){  // 前两项值固定，因此从第 3 项开始循环
        res = n1 + n2;
        n1 = n2;
        n2 = res;
    }
    return res
};