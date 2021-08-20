/*
   Viết chương trình tìm số lớn nhất trong một mảng số nguyên
*/
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = findMaxArray(A);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function findMaxArray(A) {
  var max = A[0];
  for (var i = 0; i < A.length; i++) {
    if (A[i] > max) max = A[i];
  }
  return max;
}
function output(result) {
  console.log(result);
}
