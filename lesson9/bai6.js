/*
  Tính tổng các phần tử "cực trị" trong mảng. Một phần tử được gọi là cực trị
  khi nó lớn hơn hoặc nhỏ hơn các phần tử xung quanh nó
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
function checkValid(a, b) {
  return a > b || a < b;
}
function solution(A) {
  var sum;
  sum = 0;
  if (A.length > 1) {
    if (checkValid(A[0], A[1])) sum += A[0];
    for (var i = 1; i < A.length - 1; i++) {
      if (checkValid(A[i], A[i - 1]) || checkValid(A[i], A[i + 1])) sum += A[i];
    }
    if (checkValid(A[A.length - 1], A[A.length - 2])) sum += A[A.length - 1];
  }
  return sum;
}
function output(result) {
  console.log(result);
}
