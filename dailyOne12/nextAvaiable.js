// 获取下一个有效的日期
// 传入参数：[2, 5, 7]，表示周三、周五、周日
var getNextAvaiable = function (arr) {
  var today = new Date();
  var day = today.getDay();
  var nextDay = day;
  var i = 0;
  while (arr.indexOf(nextDay) === -1) {
    i++;
    nextDay = (day + i) % 7;
  }
  return nextDay;
};
console.log(getNextAvaiable([2, 5, 7]));
