/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let dsu = new DSU();
    // 写入等于的 也就是建立并查集
    for(let i = 0; i < equations.length; i++){
        if(equations[i][1] === '='){
            dsu.union(equations[i][0].charCodeAt() - 'a'.charCodeAt(), equations[i][3].charCodeAt() - 'a'.charCodeAt());
        }
    }
    for(let i = 0; i < equations.length; i++){
        if(equations[i][1] === '!'){
            if(dsu.find(equations[i][0].charCodeAt() - 'a'.charCodeAt()) === dsu.find(equations[i][3].charCodeAt() - 'a'.charCodeAt())){
                return false;
            }
        }
    }
    return true;
};
class DSU{
    constructor(){
        this.parent = new Array(5);
        for(let i = 0; i < 5; i++){
            this.parent[i] = i;
        }
    }
    find(x){
        // 并查集的路径压缩 如果不为 x 说明不是根节点
        if(this.parent[x] !== x){
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x, y){
        this.parent[this.find(x)] = this.find(y);
        console.log(this.parent);
    }
}
equationsPossible(["c==c","b==d","d==e","b==e","a!=b"])
// @lc code=end

