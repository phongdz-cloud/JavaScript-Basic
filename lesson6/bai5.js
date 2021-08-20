/*
    Viết chương trình tính tổng các số chẵn trong một mảng các số nguyên không âm
*/
function main() {
  var A = [];
  var n, result;
  input(n,A);
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
    if (A[i] % 2 == 0 && A[i] > 0) {
      sum += A[i];
    }
  }
  return sum;
}
function output(result) {
  console.log(result);
}
