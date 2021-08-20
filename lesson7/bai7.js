/*
   Viết chương trình tính tổng số chính phương trong mảng n phần tử
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
function solution(A) {
  var sum = 0;
  for (var i = 0; i < A.length; i++) {
    if (checkSquareNumber(A[i])) sum += A[i];
  }
  return sum;
}
function output(result) {
  console.log(result);
}

function checkSquareNumber(n) {
  if (n > 0) {
    var temp = Math.floor(Math.sqrt(n));
    if (temp * temp == n) return true;
  }
  return false;
}
