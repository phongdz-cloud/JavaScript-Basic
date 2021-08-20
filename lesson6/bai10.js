/*
    Nhập vào một mảng số nguyên. Nhập tiếp một số nguyên x.
    Cho biết mảng vừa nhập có bao nhiêu phần tử bằng x
*/
function main() {
  var A = [];
  var n, x, result;
  input(n, A);
  x = parseInt(prompt("Enter value x"));
  result = solution(A, x);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A, x) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] == x) count++;
  }
  return count;
}
function output(result) {
  console.log(result);
}
