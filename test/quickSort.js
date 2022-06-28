let quickSort = (arr, startIndex, endIndex) => {
  if (startIndex >= endIndex) return;
  let povitIndex = partition(arr, startIndex, endIndex); // 基准值的位置
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
console.log("quickSort");
let testCase = [4, 2, 5, 6, 1, 3, 9, 8, 7];
quickSort(testCase, 0, testCase.length);
console.log(testCase);
