/*
    Viết chương trình đếm các số âm trong một mảng các số nguyên
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
function solution(A, n) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      count++;
    }
  }
  return count;
}
function output(result) {
  console.log(result);
}
