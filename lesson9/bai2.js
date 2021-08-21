/*
    Viết chương trình nhập vào một dãy số A gồm m số thực
    , nhập vào dãy số B gồm n số thực In ra các phần tử
    chỉ xuất hiện trong dãy A mà không xuất hiện trong dãy B
*/
function main() {
  var A = [];
  var B = [];
  var C = [];
  var nA, nB;
  input(nA, A);
  input(nB, B);
  solution(A, B, C);
  output(C);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A, B, C) {
  for (var i = 0; i < A.length; i++) {
    if (checkValid(B, A[i]) && checkMatch(C, A[i])) C.push(A[i]);
  }
}
function checkMatch(C, x) {
  for (var i = 0; i < C.length; i++) {
    if (x == C[i]) return false;
  }
  return true;
}
function checkValid(C, x) {
  for (var i = 0; i < C.length; i++) {
    if (C[i] == x) return false;
  }
  return true;
}
function output(A) {
  console.log(A);
}
