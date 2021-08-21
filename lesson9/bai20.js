/*
    Cho mảng A có nA phần tử và mảng B có nB phần tử. Tạo mảng C xen kẽ 1 phần tử mảng A
    tới phần tử mảng B. các phần tử dư ra (không còn xen kẽ được nữa) thì nối hết vào đuôi
    mảng C
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
  var i, j;
  i = j = 0;
  while (i < A.length && j < B.length) {
    C.push(A[i++]);
    C.push(B[j++]);
  }
  while (i < A.length) {
    C.push(A[i++]);
  }
  while (j < B.length) {
    C.push(B[j++]);
  }
}
function output(A) {
  console.log(A);
}
