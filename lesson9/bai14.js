// Hãy xóa tất cả các phần tử trùng nhau trong mảng và chỉ giữ lại duy nhất một phần tử
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
function checkMatch(A, x) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] == x) count++;
  }
  return count >= 2;
}
function solution(A) {
  for (var i = 0; i < A.length; i++) {
    if (checkMatch(A, A[i])) A.splice(i--, 1);
  }
}
function output(A) {
  console.log(A);
}
