/*
    Nhập vào 2 bộ ngày, tháng, năm. Tính khoảng cách (số ngày) giữa hai ngày
    vừa nhập
*/
function main() {
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var d, m, y, d1, m1, y1, result;
  d = parseInt(prompt("Enter value d"));
  m = parseInt(prompt("Enter value m"));
  y = parseInt(prompt("Enter value y"));
  d1 = parseInt(prompt("Enter value d1"));
  m1 = parseInt(prompt("Enter value m1"));
  y1 = parseInt(prompt("Enter value y1"));
  result = solution(days, d, m, y, d1, m1, y1);
  output(result);
}
function output(result) {
  console.log(result != -1 ? result : "Ngày tháng năm không hợp lệ");
}
function solution(days, d, m, y, d1, m1, y1) {
  if (checkValid(days, d, m, y) && checkValid(days, d1, m1, y1)) {
    if (m == m1 && y == y1) return abs(d - d1);
    else {
      var result;
      if (y < y1 || (m < m1 && y == y1))
        result = calculator(days, d, m, y, d1, m1, y1);
      else result = calculator(days, d1, m1, y1, d, m, y);
      return result;
    }
  }
  return -1;
}
function calculator(days, d, m, y, d1, m1, y1) {
  if (checkLeapYear(y)) days[1]++;
  var sum;
  sum = days[m - 1] - d;
  while (y != y1 || m < m1 - 1) {
    m++;
    if (m == 13) {
      m = 1;
      y++;
      if (checkLeapYear(y)) days[1]++;
      else days[1] = 28;
    }
    sum += days[m - 1];
  }
  sum += d1;
  return sum;
}
function checkValid(days, d, m, y) {
  if (y > 0 && m >= 1 && m <= 12 && d >= 1 && d <= 31) {
    if (checkLeapYear(y) && m == 2 && d <= 29)
      // năm nhuận
      return true;
    if (d > days[m - 1]) return false;
    return true;
  }
  return false;
}
function checkLeapYear(y) {
  // Năm nhuận chia hết cho 400
  if (y % 400 == 0) return true;
  // Năm nhuận chia hết cho 4 nhưng không chia hết cho 100
  if (y % 4 == 0 && y % 100 != 0) return true;
  return false;
}
