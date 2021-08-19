//Nhập vào tháng và năm. Cho biết tháng đó có bao nhiêu ngày
/*
 Tháng 1: 31
 Tháng 2 : 28 hoặc 29
 Tháng 3: 31
 Tháng 4: 30
 Tháng 5: 31
 Tháng 6: 30
 Tháng 7: 31
 Tháng 8: 31
 Tháng 9: 30
 Tháng 10: 31
 Tháng 11: 30
 Tháng 12: 31
*/
function main() {
  var days = [29, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var m, y, flag, result;
  m = parseInt(document.getElementById("numberA").value);
  y = parseInt(document.getElementById("numberB").value);
  flag = checkLeapYear(y);
  result = solution(days, m, flag);
  output(result);
}
function checkLeapYear(y) {
  // Năm nhuận chia hết cho 400
  if (y % 400 == 0) return true;
  // Năm nhuận chia hết cho 4 nhưng không chia hết cho 100
  if (y % 4 == 0 && y % 100 != 0) return true;
  return false;
}
function solution(days, m, flag) {
  return m == 2 && flag == true ? days[0] : days[m];
}
function output(result) {
  console.log(result);
}
