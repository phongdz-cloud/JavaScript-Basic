// Hãy xóa tất cả các số chính phương trong mảng 1 chiều các số nguyên
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
function checkSquareNumber(n) {
  if (n > 0) {
    var temp = Math.floor(Math.sqrt(n));
    if (temp * temp == n) return true;
  }
  return false;
}
function solution(A) {
  for (var i = 0; i < A.length; i++) {
    if (checkSquareNumber(A[i])) A.splice(i--, 1);
  }
}
function output(A) {
  console.log(A);
}
