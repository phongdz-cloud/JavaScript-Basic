/*
  Hãy liệt kê các giá trị trong mảng thỏa điều kiện
  lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó
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
function checkValue(a, b) {
  return a > b ? true : false;
}
function solution(A, B) {
  for (var i = 0; i < A.length - 1; i++) {
    if (checkValue(A[i], Math.abs(A[i + 1]))) B.push(A[i]);
  }
}
function output(B) {
  console.log(B);
}
