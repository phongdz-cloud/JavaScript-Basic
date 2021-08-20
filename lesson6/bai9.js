/*
    Nhập vào một mảng số nguyên. Nhập tiếp một số nguyên x. Tính tổng các phần tử lớn hơn x
*/
function main() {
  var A = [];
  var n, x, result;
  input(n, A);
  x = parseInt(prompt("Enter value x"));
  result = solution(A, x);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A, x) {
  var sum = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > x) sum += A[i];
  }
  return sum;
}
function output(result) {
  console.log(result);
}
