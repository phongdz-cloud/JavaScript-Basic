/*
  Cho mảng 1 chiều các số thực. Hãy viết hàm liệt kê tất cả các giá trị trong mảng
  có ít nhất 1 lân cận trái dấu nó
*/
function main() {
  var A = [];
  var B = [];
  var n;
  input(n, A);
  solution(A, B);
  output(B);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkValid(a, b) {
  return a * b < 0;
}
function solution(A, B) {
  if (A.length > 1) {
    if (checkValid(A[0], A[1])) B.push(A[0]);
    for (var i = 1; i < A.length - 1; i++) {
      if (checkValid(A[i], A[i - 1]) || checkValid(A[i], A[i + 1]))
        B.push(A[i]);
    }
    if (checkValid(A[A.length - 1], A[A.length - 2])) B.push(A[A.length - 1]);
  }
}
function output(B) {
  console.log(B);
}
