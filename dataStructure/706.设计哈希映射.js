/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function() {
    this.BASE = 769;
    this.data = new Array(this.BASE).fill(0).map(()=>[]);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const h = this.hash(key)
    for (const it of this.data[h]) {
        if (it[0] === key) {
            it[1] = value;
            return;
        }
    }
    this.data[h].push([key, value]);
   
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const hash = this.hash(key);
    for(let i=0;i<this.data[hash].length;i++){
        if(this.data[hash][i][0]===key){
            return this.data[hash][i][1]
        }
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
 const hash = this.hash(key);
    for(let i=0;i<this.data[hash].length;i++){
        if(this.data[hash][i][0]===key){
            this.data[hash].splice(i,1);
            return;
        }
    }

};

MyHashMap.prototype.hash = function(key) {
    return key%this.BASE
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

