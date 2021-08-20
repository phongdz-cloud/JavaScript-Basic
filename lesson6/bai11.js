/*
    Nhập vào một mảng số nguyên. Nhập tiếp một số nguyên x.
    Cho biết x có trong mảng vừa nhập hay không? Nếu có xuất 1, nếu không xuất số 0
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
  for (var i = 0; i < A.length; i++) {
    if (A[i] == x) return 1;
  }
  return 0;
}
function output(result) {
  console.log(result);
}
