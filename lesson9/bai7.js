/*
  Đếm số lượng giá trị lớn nhất có trong mảng 1 chiều các số thực
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
function checkMatch(C, x) {
  for (var i = 0; i < C.length; i++) {
    if (x == C[i]) return false;
  }
  return true;
}
function findMaxArray(A) {
  var max = A[0];
  for (var i = 0; i < A.length; i++) {
    if (A[i] > max) max = A[i];
  }
  return max;
}
function solution(A) {
  var max = findMaxArray(A);
  var count;
  count = 0;
  for (var i = 0; i < A.length; i++) {
    if (max == A[i]) count++;
  }
  return count;
}
function output(result) {
  console.log(result);
}
