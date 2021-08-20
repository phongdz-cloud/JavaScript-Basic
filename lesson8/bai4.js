/*
Tìm giá trị đầu tiên trong mảng 1 chiều các số nguyên có chữ số đầu tiên là chữ số lẻ (dauledautien)
Nếu trong mảng không tồn tại giá trị như vậy hàm trả về giá trị 0
*/
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = solution(A);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkOddNumber(n) {
  while (n > 10) {
    n = Math.floor(n / 10);
  }
  return n % 2 != 0;
}
function output(result) {
  console.log(result);
}
function solution(A) {
  for (var i = 0; i < A.length; i++) {
    if (checkOddNumber(A[i]) == true) return A[i];
  }
  return 0;
}
