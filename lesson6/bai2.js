/*
    Nhập vào mảng các số thực. Tính tổng các phần tử trong mảng
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
function solution(A) {
  var sum = 0;
  for (var i = 0; i < A.length; i++) {
    sum += A[i];
  }
  return sum;
}
function output(result) {
  console.log(result);
}
