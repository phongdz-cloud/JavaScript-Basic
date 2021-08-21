// Hãy xóa tất cả các số lớn nhất trong mảng các số thực
function main() {
  var A = [];
  var n;
  input(n, A);
  solution(A);
  output(A);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkValid(n, index) {
  return index >= 0 && index < n;
}
function findMaxArray(A) {
  var max = A[0];
  for (var i = 0; i < A.length; i++) {
    if (A[i] > max) max = A[i];
  }
  return max;
}
function solution(A) {
  var max;
  max = findMaxArray(A);
  for (var i = 0; i < A.length; i++) {
    if (A[i] == max) {
      A.splice(i--, 1);
    }
  }
}
function output(A) {
  console.log(A);
}
