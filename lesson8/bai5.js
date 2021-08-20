/*
Ta định nghĩa 1 mảng được gọi là dạng sóng khi phần tử có trị số i
lớn hơn hoặc nhỏ hơn 2 phần tử xung quanh. Hãy viết hàm kiểm tra mảng có dạng sóng không
*/
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = solution(A, n);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkWave(a, b, c) {
  return (a > b && a > c) || (a < b && a < c);
}
function solution(A) {
  if (A.length < 3) return 0;
  for (var i = 1; i < A.length - 1; i++) {
    if (checkWave(A[i], A[i - 1], A[i + 1])) return A[i];
  }
  return 0;
}
function output(result) {
  console.log(result);
}
