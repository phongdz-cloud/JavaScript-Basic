/*
    Cho 2 mảng A,B mỗi mãng có n phần tử. Thực hiện việc trộn xen kẽ 
    1 phần tử mảng A tới phần tử mảng B để tạo ra mảng C
*/
function main() {
  var A = [];
  var B = [];
  var C = [];
  var n;
  n = parseInt(prompt("Enter value n"));
  input(n, A);
  input(n, B);
  mergeArray(A, B, C);
  output(C);
}
function input(n, A) {
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function mergeArray(A, B, C) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    C[count++] = A[i];
    C[count++] = B[i];
  }
}
function output(C) {
  console.log(C);
}
