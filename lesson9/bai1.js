/*
    Cho mảng số nguyên A. Tạo ra 2 mảng B va C theo quy tắc: mảng B gồm
    các phần tử dương hoặc bằng 0 của A và mảng C gồm các phần tử âm của A
*/
function main() {
  var A = [];
  var B = [];
  var C = [];
  var n;
  input(n, A);
  solution(A, B, C);
  output(B);
  output(C);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkValid(n) {
  return n >= 0 ? true : false;
}
function solution(A, B, C) {
  for (var i = 0; i < A.length; i++) {
    if (checkValid(A[i])) B.push(A[i]);
    else C.push(A[i]);
  }
}
function output(A) {
  console.log(A);
}
