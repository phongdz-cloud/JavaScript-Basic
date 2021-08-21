//Hãy "dịch phải xoay vòng" k lần phần tử trong mảng
function main() {
  var A = [];
  var n, k;
  input(n, A);
  k = parseInt(prompt("Enter value k"));
  solution(A, k);
  output(A);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function rotateRight(A) {
  var x;
  x = A[A.length - 1];
  A.splice(A.length - 1, 1);
  A.splice(0, 0, x);
}
function solution(A, k) {
  while (k > 0) {
    rotateRight(A);
    k--;
  }
}
function output(A) {
  console.log(A);
}
