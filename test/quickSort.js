 /****
   * https://blog.csdn.net/qq_35344198/article/details/106785849
   *  快排的核心思想是 找到一个基准值
   * 然后让这个基准值 左右基本有序
   * 进而递归左右 完成更小粒度的寻找基准值位置然后左右有序
   * partition 函数目标是把数组分割为 小 povit 大的结构 最后返回 povit 的位置
   */
let quickSort = (arr, startIndex, endIndex) => {
  if (startIndex >= endIndex) return;
  let povitIndex = partition(arr, startIndex, endIndex);
  quickSort(arr, startIndex, povitIndex - 1);
  quickSort(arr, povitIndex + 1, endIndex);
};
let partition = (arr, startIndex, endIndex) => {
  let povit = arr[startIndex];
  let left = startIndex;
  let right = endIndex; 
  let index = startIndex;
  
  while (right > left) {
    while (right > left) {
      if (arr[right] < povit) {
        arr[left] = arr[right];
        index = right;
        left++;
        break;
      }
      right--;
    }
    while (right > left) {
      if (arr[left] > povit) {
        arr[right] = arr[left];
        index = left;
        right--;
        break;
      }
      left++;
    }
  }
  arr[index] = povit;
  return index;
};
// console.log("quickSort");
// let testCase = [4, 2, 5, 6, 1, 3, 9, 8, 7];
// quickSort(testCase, 0, testCase.length);
// console.log(testCase);
