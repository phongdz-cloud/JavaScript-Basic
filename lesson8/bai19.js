/*
    Cho 2 mảng A,B có thứ tự tăng dần. Thực hiện việc trộn 2 mảng A và B
    để tạo ra mảng cũng có thứ tự tăng dần
*/
function main() {
  var A = [];
  var B = [];
  var C = [];
  var n;
  n = parseInt(prompt("Enter value n"));
  input(n, A);
  input(n, B);
  sortArray(A);
  console.log(A);
  sortArray(B);
  console.log(B);
  mergeArray(A, B, C);
  output(C);
}
function input(n, A) {
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function swap(A, i, j) {
  var temp;
  temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}
function sortArray(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        swap(A, i, j);
      }
    }
  }
}
function checkIndex(C, x) {
  for (var i = 0; i < C.length - 1; i++) {
    if (x >= C[i] && x <= C[i + 1]) return i + 1;
  }
  return C.length;
}
function mergeArray(A, B, C) {
  if (A[0] > B[0]) {
    var temp = A[0];
    A[0] = B[0];
    B[0] = temp;
  }
  C.push(A[0]);
  C.push(B[0]);
  for (var i = 1; i < A.length; i++) {
    C.splice(checkIndex(C, A[i]), 0, A[i]);
    C.splice(checkIndex(C, B[i]), 0, B[i]);
  }
}
function output(C) {
  console.log(C);
}
