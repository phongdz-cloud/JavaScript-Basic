/*
    Nhập vào ngày ,tháng,năm. Hỏi từ ngày vừa nhập đến ngày đầu tiên của năm tiếp theo là bao nhiêu ngày
*/
function main() {
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var d, m, y, result, flag;
  d = parseInt(prompt("Enter value d"));
  m = parseInt(prompt("Enter value m"));
  y = parseInt(prompt("Enter value y"));
  flag = checkValid(days, d, m, y);
  result = solution(days, d, m, flag);
  output(result);
}
function output(result) {
  console.log(result != -1 ? result : "Ngày tháng năm không hợp lệ");
}
function solution(days, d, m, flag) {
  if (flag == true) {
    var sum;
    sum = days[m - 1] - d;
    while (true) {
      m++;
      if (m > 12) {
        break;
      }
      sum += days[m - 1];
    }
    return sum + 1;
  }
  return -1;
}
function checkValid(days, d, m, y) {
  if (y > 0 && m >= 1 && m <= 12 && d >= 1 && d <= 31) {
    if (checkLeapYear(y)) {
      // năm nhuận
      days[1]++;
    }
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
